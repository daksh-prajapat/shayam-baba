import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema(
  {
    // ── Booking ID (human-readable, e.g. KS-20260915-AB12) ──
    bookingId: { type: String, required: true, unique: true, index: true },

    // ── Service Info ──
    serviceName:  { type: String, required: true, trim: true },
    serviceType:  {
      type: String,
      required: true,
      enum: ['swamani', 'prasad', 'seva', 'bhog', 'shringar', 'nishan', 'donation', 'bhandara'],
    },
    icon: { type: String, default: '🙏' },
    amount: { type: Number, required: true, min: 0 },

    // ── Customer Info ──
    name:    { type: String, required: true, trim: true },
    phone:   { type: String, required: true, trim: true, index: true },
    email:   { type: String, trim: true, default: '' },
    city:    { type: String, trim: true, default: '' },
    address: { type: String, trim: true, default: '' },

    // ── Booking Details ──
    date:     { type: String, default: '' },   // requested service date
    occasion: { type: String, default: '' },
    note:     { type: String, default: '' },

    // ── Payment ──
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'cancelled', 'refunded'],
      default: 'pending',
    },
    paymentVerified:   { type: Boolean, default: false },
    razorpayOrderId:   { type: String, default: null, index: true },
    razorpayPaymentId: { type: String, default: null, unique: true, sparse: true },

    // ── Admin Status ──
    status: {
      type: String,
      enum: ['Pending Payment', 'Confirmed', 'Processing', 'Completed', 'Cancelled'],
      default: 'Pending Payment',
    },
    adminNote: { type: String, default: '' },   // owner can add notes per booking
  },
  {
    timestamps: true,   // adds createdAt and updatedAt automatically
  }
)

// Prevent model re-compilation in dev hot-reload
export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
