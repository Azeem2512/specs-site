// src/components/Footer.js

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-50 mt-16 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>📍 5th Main RT Nagar, Bangalore City</p>
          <p>📞 +91 8105371154</p>
          <p>✉️ support@Glaséo.com</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-600">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-blue-600">Cart</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 bg-blue-100">
        © {new Date().getFullYear()} Glaséo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
