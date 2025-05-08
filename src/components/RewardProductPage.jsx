import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mug from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";

// Thumbnails (all same for demo)
import thumb1 from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";
import thumb2 from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";
import thumb3 from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";
import thumb4 from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";
import thumb5 from "../assets/Black and White Minimalist Hoodie Mockup Instagram Post (1).png";

const rewards = [
  {
    id: 1,
    title: "Classic Black Hoodie",
    points: 1200,
    img: mug,
    description: "Stay comfortable and stylish in the KIBA Labs classic hoodie.",
    thumbnails: [thumb1, thumb2, thumb3, thumb4, thumb5],
  },
  {
    id: 2,
    title: "Premium White Shirt",
    points: 900,
    img: "https://via.placeholder.com/500x500?text=White+Shirt",
    description: "A clean and crisp premium shirt for everyday wear.",
    thumbnails: [],
  },
];

const RewardProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = rewards.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState(product?.img || "");

  if (!product) {
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const colors = ["black", "blue", "white"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        {/* Product Images */}
        <div>
          <img
            src={mainImage}
            alt="Product"
            className="rounded-lg w-full object-cover"
          />
          <div className="mt-4">
            <div className="flex space-x-2 mb-1">
              {product.thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md border cursor-pointer hover:border-indigo-500"
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-green-500 font-bold mb-4">{product.points} Points</p>

            {/* Color Selection */}
            <div className="mb-4">
              <h4 className="font-medium mb-1">Color</h4>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <h4 className="font-medium mb-1">Size</h4>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded ${
                      selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <button
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
                Add to Cart
              </button>
              <button
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg"
                onClick={() =>
                  navigate("/CheckoutPage", {
                    state: {
                      productId: product.id,
                      title: product.title,
                      points: product.points,
                      image: product.img,
                      description: product.description,
                      quantity,
                      color: selectedColor,
                      size: selectedSize,
                    },
                  })
                }
              >
                Redeem Now
              </button>
            </div>

            <div className="text-sm text-gray-600">
              <p>Estimated delivery: 5–7 business days.</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Premium material for all-day comfort.</li>
              <li>Adjustable hood and spacious front pocket.</li>
              <li>Great for casual wear or team events.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardProductPage;
