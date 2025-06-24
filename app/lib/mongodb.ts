import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error("Please define MONGODB_URI in .env.local");
// }

// // Module-scoped cache variables
// let conn: typeof mongoose | null = null;
// let promise: Promise<typeof mongoose> | null = null;

// export async function connectToDatabase() {
//   try {
//     if (conn) return conn;

//     if (!promise) {
//       promise = mongoose.connect(MONGODB_URI, {
//         bufferCommands: false,
//       });
//     }
//     conn = await promise;
//     console.log("Connected to MongoDB successfully");
//     return conn;
//   } catch (error) {
//     throw new Error("Failed to connect to the database");
//   }
// }
