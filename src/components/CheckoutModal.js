// src/components/CheckoutModal.js
import React from "react";
import { createPortal } from "react-dom";

export default function CheckoutModal({ open, onClose, cart, total }) {
  if (!open) return null;                              // nothing if closed

  const gst = +(total * 0.18).toFixed(2);             // 18 % GST
  const grand = +(total + gst).toFixed(2);             // subtotal + GST

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-md rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

        {/* list of items */}
        <div className="max-h-48 overflow-y-auto mb-4 space-y-2">
          {cart.map((p, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span>{p.name}</span>
              <span>₹{p.price}</span>
            </div>
          ))}
        </div>

        {/* totals */}
        <div className="border-t pt-3 space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span><span>₹{total}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18 %)</span><span>₹{gst}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span><span>₹{grand}</span>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-400 rounded-lg py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Payment successful (demo)");
              onClose();
            }}
            className="flex-1 bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
