import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

const products = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 99,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_5215.jpg?v=1739897513&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_5211.jpg?v=1739897513&width=493",  // hover image
    ],
  },
  {
    id: 2,
    name: "Bold Round Frame",
    price: 129,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_3542.jpg?v=1738189986&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_3506.jpg?v=1738189986&width=493",  // hover image
    ],
  },
  {
    id: 3,
    name: "Venice 144 - Blue Light",
    price: 89,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_5145.jpg?v=1739830893&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_5159.jpg?v=1739830893&width=493",  // hover image
    ],
  },
  {
    id: 4,
    name: "Sleek Rectangle",
    price: 109,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_3529.jpg?v=1738189317&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_3523.jpg?v=1738189317&width=493",  // hover image
    ],
  },
  {
    id: 5,
    name: "Minimalist Oval",
    price: 79,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_3502.jpg?v=1738189624&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_3509_762f99f4-af97-4a4f-8765-5688aa98d27f.jpg?v=1738189624&width=493",  // hover image
    ],
  },
  {
    id: 6,
    name: "Modern Square",
    price: 119,
    images: [
      "https://circulr.co/cdn/shop/files/Milan-Black2.jpg?v=1717428290&width=493",  // default image
      "https://circulr.co/cdn/shop/files/Milan-Black.jpg?v=1717428290&width=493",  // hover image
    ],
  },
  {
    id: 7,
    name: "Paris 144 - Blue Light",
    price: 139,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_8344.jpg?v=1742166134&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_8078.jpg?v=1742166134&width=493",  // hover image
    ],
  },
  {
    id: 8,
    name: "Sports Sunglasses",
    price: 149,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_5150.jpg?v=1739830622&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_5164.jpg?v=1739830622&width=493",  // hover image
    ],
  },
  {
    id: 9,
    name: "Luxury Shades",
    price: 199,
    images: [
      "https://circulr.co/cdn/shop/files/IMG_3498.jpg?v=1738190513&width=493",  // default image
      "https://circulr.co/cdn/shop/files/IMG_3518.jpg?v=1738190513&width=493",  // hover image
    ],
  },
];

function Shop() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Glasses Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            {/* Image Swap on Hover */}
            <div className="relative group">
              <img
                src={product.images[0]}  // Default image
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 ease-in-out"
              />
              <img
                src={product.images[1]}  // Hover image
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>

            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
