import React from 'react';
import { FaShoppingBag, FaHeart, FaShoppingCart } from 'react-icons/fa';

// Import images from assets folder
import mug from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png';
import shirt from '../assets/Black and White Minimalist Mug Mockup Instgaram Post.png';
import hat1 from '../assets/White And Black Minimalist Cap Baseball Mockup Instagram Post.png';
import hoodieBlack from '../assets/Black and White Minimalist T Shirt Mockup Instagram Post.png';
import hat2 from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post.png';
import hoodieWhite from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post.png';

const WishlistPage = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Ceramic White Coffee Mug',
      points: 1200,
      image: mug,
    },
    {
      id: 2,
      name: 'Premium White Shirt',
      points: 900,
      image: shirt,
    },
    {
      id: 3,
      name: 'Classic White & Black Hat',
      points: 900,
      image: hat1,
    },
    {
      id: 4,
      name: 'Classic Black Hoodie',
      points: 900,
      image: hoodieBlack,
    },
    {
      id: 5,
      name: 'Classic White & Black Hat',
      points: 900,
      image: hat2,
    },
    {
      id: 6,
      name: 'Classic White Hoodie',
      points: 900,
      image: hoodieWhite,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          <button className="text-gray-700 hover:text-green-500">
            <FaHeart size={24} />
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <FaShoppingCart size={24} />
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <FaShoppingBag size={24} />
          </button>
        </div>
      </div>

      {/* Wishlist Section */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 w-full text-center">
                <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                <p className="text-green-600 font-bold">{product.points} Points</p>
              </div>
              <div className="absolute top-2 right-2">
                <button className="text-red-500 text-xl hover:text-red-600">&hearts;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
