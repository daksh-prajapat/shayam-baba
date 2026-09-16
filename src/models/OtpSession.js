import mongoose from 'mongoose'

const OtpSessionSchema = new mongoose.Schema(
  {
    phone:     { type: String, required: true, index: true },
    otp:       { type: String, required: true },       // hashed bcrypt
    attempts:  { type: Number, default: 0 },
    expiresAt: { type: Date,   required: true },
    verified:  { type: Boolean, default: false },
  },
  { timestamps: true }
)

// Auto-delete expired OTPs from DB
OtpSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export default mongoose.models.OtpSession || mongoose.model('OtpSession', OtpSessionSchema)
