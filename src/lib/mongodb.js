// ── MongoDB connection (singleton pattern for Next.js) ──────────────────────
// Reuses existing connection across hot-reloads in dev and across serverless
// invocations in production (connection pooling via Mongoose).

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    '⚠️  MONGODB_URI environment variable is not set. ' +
    'Add it to .env.local — get your URI from https://cloud.mongodb.com'
  )
}

// Global cache — prevents creating a new connection on every hot-reload
let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (err) {
    cached.promise = null
    throw err
  }

  return cached.conn
}
