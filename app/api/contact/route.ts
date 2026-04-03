import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendContactEmails } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    // Validate main required fields again at server level
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Prepare data
    const contactData = { name, email, phone, service, budget, message };

    // Fire and forget: We trigger both the database save and the email distribution
    // in parallel but we do NOT await the email send to keep the response instant.
    const savePromise = new Contact(contactData).save();
    
    // Background the email delivery entirely
    sendContactEmails(contactData).catch(err => console.error("BG Mail Error:", err));

    // Wait only for the database save to ensure we don't lose data
    await savePromise;

    return NextResponse.json(
      { message: "Success! Your inquiry has been sent." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { message: "Backend error. Please try again later." },
      { status: 500 }
    );
  }
}
