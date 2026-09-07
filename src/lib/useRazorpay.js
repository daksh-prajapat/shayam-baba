'use client'
// ── useRazorpay — reusable hook for Razorpay checkout ──────────────────────
// Loads the Razorpay checkout script on demand, creates an order server-side,
// opens the checkout, and verifies the payment server-side before confirming.

import { useState, useCallback } from 'react'

// Load Razorpay script dynamically
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false)
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload  = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

/**
 * useRazorpay()
 *
 * Returns: { initiatePayment, paying, payError }
 *
 * initiatePayment({
 *   amount,        // ₹ amount (number)
 *   serviceType,   // 'swamani' | 'prasad' | 'seva' | 'bhog' | 'shringar' | 'nishan' | 'donation'
 *   serviceName,   // string
 *   customerName,  // string
 *   phone,         // 10-digit string
 *   email,         // optional string
 *   onSuccess,     // ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => void
 *   onFailure,     // (errorMsg) => void
 *   onCancel,      // () => void
 * })
 */
export function useRazorpay() {
  const [paying, setPaying]     = useState(false)
  const [payError, setPayError] = useState('')

  const initiatePayment = useCallback(async ({
    amount, serviceType, serviceName,
    customerName, phone, email = '',
    onSuccess, onFailure, onCancel,
  }) => {
    setPayError('')
    setPaying(true)

    try {
      // ── 1. Load Razorpay script ──
      const loaded = await loadRazorpayScript()
      if (!loaded) {
        const msg = 'Razorpay script load failed. कृपया internet connection जाँचें।'
        setPayError(msg)
        onFailure?.(msg)
        setPaying(false)
        return
      }

      // ── 2. Create order server-side ──
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, serviceType, serviceName, customerName, phone }),
      })
      const orderData = await orderRes.json()

      if (!orderRes.ok || !orderData.orderId) {
        const msg = orderData.error || 'Order create failed. कृपया दोबारा प्रयास करें।'
        setPayError(msg)
        onFailure?.(msg)
        setPaying(false)
        return
      }

      // ── 3. Open Razorpay checkout ──
      const options = {
        key:      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount:   orderData.amount,       // paise (from server)
        currency: orderData.currency,
        order_id: orderData.orderId,
        name:     'खाटू श्याम जी',
        description: serviceName,
        image:    '/images/temple-main.jpg',
        prefill: {
          name:    customerName,
          contact: phone,
          email:   email || '',
        },
        notes: { serviceType, serviceName },
        theme: { color: '#D4A017' },

        handler: async (response) => {
          // ── 4. Payment success callback — verify server-side ──
          try {
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id:   response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature:  response.razorpay_signature,
              }),
            })
            const verifyData = await verifyRes.json()

            if (verifyData.success) {
              setPaying(false)
              onSuccess?.({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id:   response.razorpay_order_id,
                razorpay_signature:  response.razorpay_signature,
              })
            } else {
              const msg = verifyData.error || 'Payment verification failed. Support से सम्पर्क करें।'
              setPayError(msg)
              onFailure?.(msg)
              setPaying(false)
            }
          } catch {
            const msg = 'Verification network error. कृपया support से सम्पर्क करें: 9929975116'
            setPayError(msg)
            onFailure?.(msg)
            setPaying(false)
          }
        },

        modal: {
          ondismiss: () => {
            // User closed the checkout modal
            setPaying(false)
            onCancel?.()
          },
        },
      }

      const rzp = new window.Razorpay(options)

      rzp.on('payment.failed', (response) => {
        const msg = response.error?.description || 'Payment failed. कृपया दोबारा प्रयास करें।'
        setPayError(msg)
        onFailure?.(msg)
        setPaying(false)
      })

      rzp.open()

    } catch (err) {
      console.error('[useRazorpay] Unexpected error:', err)
      const msg = 'Unexpected error. कृपया दोबारा प्रयास करें।'
      setPayError(msg)
      onFailure?.(msg)
      setPaying(false)
    }
  }, [])

  return { initiatePayment, paying, payError }
}
