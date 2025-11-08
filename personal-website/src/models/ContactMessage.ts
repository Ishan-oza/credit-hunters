import mongoose, { Schema, models, model } from "mongoose";

export interface IContactMessage extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  aiReply?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    aiReply: { type: String },
  },
  { timestamps: true }
);

export const ContactMessage = models.ContactMessage || model<IContactMessage>("ContactMessage", ContactMessageSchema);
