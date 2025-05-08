// RewardsPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaClipboardList } from "react-icons/fa";
import mug from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png';
import shirt from '../assets/Black and White Minimalist Mug Mockup Instgaram Post.png';
import hat1 from '../assets/White And Black Minimalist Cap Baseball Mockup Instagram Post.png';
import hoodieBlack from '../assets/Black and White Minimalist T Shirt Mockup Instagram Post.png';
import hat2 from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post.png';
import hoodieWhite from '../assets/Black and White Minimalist Hoodie Mockup Instagram Post.png';

const rewards = [
  {
    id:1,
    title: "Premium Ceramic White Coffee Mug",
    points: 1200,
    img:mug,
    stock: "Only 2 left!",
  },
  {
    id: 2,
    title: "Premium White Shirt",
    points: 900,
    img:shirt,
  },
  {
    id: 3,
    title: "Classic Black Hoodie",
    points: 900,
    img:hat1,
  },
  {
    id: 4,
    title: "Classic White & Black Hat",
    points: 900,
    img:hoodieBlack,
  },
  {
    id: 5,
    title: "Classic White Hoodie",
    points: 900,
    img:hoodieBlack,
  },
];

export default function RewardsPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="flex items-center space-x-6">
          <FaShoppingBag className="text-xl text-gray-700 cursor-pointer hover:text-indigo-600 transition duration-200" />
          <FaHeart className="text-xl text-gray-700 cursor-pointer hover:text-indigo-600 transition duration-200" />
          <FaClipboardList className="text-xl text-gray-700 cursor-pointer hover:text-indigo-600 transition duration-200" />
        </div>
      </header>

      {/* Available Points */}
      <div className="mb-8">
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-700">
            Your Available Points To Redeem
          </div>
          <div className="text-3xl font-bold text-indigo-600">9,990</div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/reward-product/${item.id}`)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 flex flex-col h-full">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h2>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-indigo-600 font-bold">
                    {item.points} Points
                  </span>
                  {item.stock && (
                    <span className="text-sm text-red-500 italic">
                      {item.stock}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
