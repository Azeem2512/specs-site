import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Adding gap between navbar and image */}
      <div className="relative mt-12"> 
        <div
          className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5202048/pexels-photo-5202048.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              See the World in Style
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Discover our latest collection of stylish eyewear
            </p>
            <Link to="/shop">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg shadow-lg transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
