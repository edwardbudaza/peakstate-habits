import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // This will auto-create a unique index
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

// ❌ REMOVE THIS TO AVOID DUPLICATE INDEX WARNINGS
// UserSchema.index({ email: 1 }, { unique: true });

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
