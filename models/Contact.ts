import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  createdAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
    },
    budget: {
      type: String,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [20, "Message should be at least 20 characters"],
    },
  },
  {
    timestamps: true,
  }
);

/* 
 * Use the existing model if it exists, otherwise create a new one.
 * This prevents "OverlapModelError" in Next.js development.
 */
const Contact = models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;
