import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          {/* list */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error(`${item.name} removed from cart`);
                  }}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* checkout */}
          <div className="text-center">
            {user ? (
              <button
                onClick={() => setOpen(true)}
                className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            ) : (
              <p className="text-center text-red-500 font-semibold mt-8">
                Please{" "}
                <Link to="/login" className="underline text-blue-600">
                  login
                </Link>{" "}
                to proceed to checkout.
              </p>
            )}
          </div>
        </>
      )}

      {/* order‑summary modal */}
      <CheckoutModal
        open={open}
        onClose={() => setOpen(false)}
        cart={cart}
        total={totalPrice}
      />
    </div>
  );
}

export default Cart;
