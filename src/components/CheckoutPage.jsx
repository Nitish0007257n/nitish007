import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-8 text-red-600">
        No product selected.
        <button className="ml-2 underline" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  }

  const {
    title,
    points,
    img,
    description,
    quantity,
    color,
    size,
  } = state;

  const totalPoints = points * quantity;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>

        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <span className="font-semibold text-green-600">1</span>
            <span>Cart</span>
          </div>
          <div className="flex gap-4 text-gray-500">
            <span>2 Billing & address</span>
            <span>3 Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Section */}
          <div className="lg:col-span-2 bg-white rounded p-4 shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Cart (1)</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={img}
                alt={title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-xs text-gray-600">
                  Size: {size} | Color: {color}
                </p>
              </div>
              <div className="text-sm text-gray-700">{points} Points</div>
              <div className="flex items-center gap-2">
                <button className="px-2 bg-gray-200 rounded">-</button>
                <span>{quantity}</span>
                <button className="px-2 bg-gray-200 rounded">+</button>
              </div>
              <div className="text-sm font-medium">{totalPoints}</div>
              <button className="text-red-600 text-xl hover:opacity-70">🗑</button>
            </div>

            <button
              className="mt-4 text-indigo-600 underline"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded p-4 shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{totalPoints}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>-</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>-</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Points</span>
              <span>{totalPoints}</span>
            </div>
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
              onClick={() =>
                navigate("/billingaddress", {
                  state: { ...state, totalPoints }, // Passing state to billing page
                })
              }
            >
              Proceed to Billing & Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
