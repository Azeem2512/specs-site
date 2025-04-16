import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <CartProvider>
    <AuthProvider>
      <App />
      <Toaster position="top-center" />
    </AuthProvider>
  </CartProvider>
  </React.StrictMode>
);
