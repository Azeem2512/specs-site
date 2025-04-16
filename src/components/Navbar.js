import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
         Glaséo
        </NavLink>

        <div className="flex gap-6 items-center text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          <NavLink to="/shop" className="hover:text-blue-500">Shop</NavLink>
          <NavLink to="/cart" className="hover:text-blue-500">Cart</NavLink>
          <NavLink to="/about" className="hover:text-blue-500">About</NavLink>

          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="hover:text-blue-500">Login</NavLink>
              <NavLink to="/register" className="hover:text-blue-500">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
