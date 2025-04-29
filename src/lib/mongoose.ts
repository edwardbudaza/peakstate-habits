import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL!;

if (!MONGODB_URI) {
  throw new Error("❌ MONGO_URL must be defined in environment variables");
}

// Create a singleton connection
let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Could not connect to MongoDB");
  }
}
