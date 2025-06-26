import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Initialize global mongoose cache if not already set
globalThis.mongoose ||= { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if (globalThis.mongoose.conn) return globalThis.mongoose.conn;

  if (!globalThis.mongoose.promise) {
    globalThis.mongoose.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  globalThis.mongoose.conn = await globalThis.mongoose.promise;
  return globalThis.mongoose.conn;
}
