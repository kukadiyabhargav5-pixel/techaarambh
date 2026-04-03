import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  pool: true,   // use pooled connections for speed
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface MailOptions {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export const sendContactEmails = async (data: MailOptions) => {
  const { name, email, phone, service, budget, message } = data;

  // 1. Admin Email Template (Professional & Detailed)
  const adminMailOptions = {
    from: `"Techaarambh Notifications" <${process.env.EMAIL_USER}>`,
    to: "techaarambh78@gmail.com",
    subject: `New Project Inquiry: ${service} from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
        <div style="background: linear-gradient(to right, #2563EB, #7C3AED); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Project Inquiry</h1>
        </div>
        <div style="padding: 20px; color: #333333;">
          <p style="font-size: 16px; line-height: 1.6;">You have received a new lead from the Techaarambh website contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0;"><span style="background-color: #f0f7ff; color: #0066cc; padding: 4px 10px; border-radius: 4px; font-size: 13px;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Est. Budget:</td>
              <td style="padding: 8px 0;">${budget || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 25px;">
            <p style="font-weight: bold; margin-bottom: 10px;">Project Description:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2563EB; border-radius: 4px; font-style: italic; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br />')}
            </div>
          </div>
        </div>
        <div style="padding: 20px; background-color: #fcfcfc; border-top: 1px solid #eeeeee; border-radius: 0 0 8px 8px; text-align: center; color: #888888; font-size: 12px;">
          <p>This inquiry was sent directly from techaarambh.com</p>
        </div>
      </div>
    `,
  };

  // 2. User Confirmation Email Template (Professional & Branded)
  const userMailOptions = {
    from: `"Techaarambh Team" <${process.env.EMAIL_USER}>`,
    to: email, // Send to the user who filled the form
    subject: `Acknowledgement: Your Inquiry with Techaarambh`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
        <div style="text-align: center; padding-bottom: 20px;">
          <h1 style="color: #2563EB; margin: 0; font-size: 28px;">Techaarambh</h1>
          <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 10px; color: #7C3AED; margin-top: 4px; font-weight: bold;">Where Technology Begins</p>
        </div>
        
        <div style="padding: 20px; color: #333333; line-height: 1.6;">
          <h2 style="font-size: 20px; margin-bottom: 20px;">Dear ${name},</h2>
          <p>Thank you for reaching out to Techaarambh. We have successfully received your inquiry regarding <strong>${service}</strong>.</p>
          
          <p>Our team of technical experts is currently reviewing the details you provided:</p>

          <div style="background-color: #f9f9f9; border-left: 4px solid #2563EB; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; line-height: 1.6;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
              <li><strong>Service:</strong> ${service}</li>
              ${budget ? `<li><strong>Budget:</strong> ${budget}</li>` : ''}
              <li><strong>Message:</strong> ${message}</li>
            </ul>
          </div>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 8px; margin: 25px 0;">
             <p style="margin: 0; font-weight: bold; color: #2563EB;">What happens next?</p>
             <ul style="margin-top: 10px; padding-left: 20px; font-size: 14px;">
               <li>An expert consultant will reach out to you within <strong>24 to 48 hours</strong>.</li>
               <li>We may schedule a brief strategy session to discuss your project goals in depth.</li>
               <li>You'll receive a transparent, comprehensive proposal and timeline.</li>
             </ul>
          </div>

          <p>In the meantime, feel free to explore our <a href="https://techaarambh.com/projects" style="color: #2563EB; text-decoration: none; font-weight: bold;">latest portfolio</a> or connect with us on social media for more updates.</p>
          
          <p>We look forward to potentially collaborating with you and bringing your digital vision to life.</p>
          
          <div style="margin-top: 40px; border-top: 1px solid #eeeeee; padding-top: 20px;">
            <p style="margin: 0; font-weight: bold;">Best Regards,</p>
            <p style="margin: 0;">Partnership Relations Team</p>
            <p style="margin: 4px 0; color: #2563EB; font-weight: bold;">Techaarambh IT Solutions</p>
            <p style="margin: 0; font-size: 12px; color: #888888;">India's Leading Digital Partner</p>
          </div>
        </div>

        <div style="padding: 20px; border-top: 1px solid #eeeeee; text-align: center;">
          <p style="font-size: 12px; color: #999999; margin-bottom: 10px;">&copy; 2024 Techaarambh IT Solutions. All rights reserved.</p>
          <div style="display: inline-block; gap: 10px;">
            <a href="#" style="text-decoration: none; color: #2563EB; font-size: 12px; margin: 0 5px;">Instagram</a>
            <a href="#" style="text-decoration: none; color: #2563EB; font-size: 12px; margin: 0 5px;">LinkedIn</a>
            <a href="#" style="text-decoration: none; color: #2563EB; font-size: 12px; margin: 0 5px;">Twitter</a>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    console.log("Emails sent successfully");
  } catch (err) {
    console.error("Error sending emails:", err);
    // We don't throw error here to allow the main API to finish (the database part is done)
    // but in a production app, you might want to log this or queue it.
  }
};
