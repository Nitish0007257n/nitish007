import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BillingAddress = () => {
  const { state } = useLocation(); // Get data passed from CheckoutPage
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(0);

  // Sample addresses for the user
  const addresses = [
    {
      name: "Gaurav Chaudhary (Home)",
      default: true,
      address: "8147 Nathan Drive Suite B19 Burlington, VT 80201",
      phone: "904-966-2836",
    },
    {
      name: "Gaurav Chaudhary",
      default: false,
      address: "18695 Thamann Circle Apt 008, Idaho Falls, WV / 55037",
      phone: "296-757-9690",
    },
  ];

  const handlePlaceOrder = () => {
    if (selectedAddress >= 0) {
      // Passing all the details (selected address, totalPoints) to the payment page
      navigate("/paymentpage", {
        state: {
          ...state,
          selectedAddress: addresses[selectedAddress],
        },
      });
    } else {
      alert("Please select a shipping address.");
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page (CheckoutPage)
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Checkout Steps */}
        <div className="flex justify-center mb-8 space-x-10">
          <Step title="Cart" />
          <Step title="Billing & Address" active />
          <Step title="Payment" />
        </div>

        {/* Checkout Content */}
        <div className="flex gap-8">
          {/* Left Section - Address List */}
          <div className="flex-1 bg-white p-6 rounded shadow space-y-6">
            <button className="text-green-600 hover:underline mb-4">
              + New address
            </button>

            {/* Address Cards */}
            {addresses.map((addr, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center bg-gray-50 p-4 rounded border ${
                  selectedAddress === idx ? "border-black" : "border-gray-200"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{addr.name}</p>
                    {addr.default && (
                      <span className="text-xs bg-gray-300 px-2 py-0.5 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{addr.address}</p>
                  <p className="text-gray-600">{addr.phone}</p>
                </div>
                <input
                  type="checkbox"
                  checked={selectedAddress === idx}
                  onChange={() => setSelectedAddress(idx)}
                  className="w-5 h-5"
                />
              </div>
            ))}

            <button
              onClick={handleBack}
              className="text-green-600 hover:underline mt-4"
            >
              Back
            </button>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-1/3 space-y-6">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{state.totalPoints}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>0</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Points</span>
                <span>{state.totalPoints}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step = ({ title, active }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
        active ? "bg-green-600" : "bg-gray-400"
      }`}
    >
      {active ? "✓" : ""}
    </div>
    <p className="mt-2 text-sm">{title}</p>
  </div>
);

export default BillingAddress;
