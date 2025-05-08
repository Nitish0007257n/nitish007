import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation(); // Get data passed from BillingAddress
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    // Redirect or handle order completion logic here
    
    navigate("/success"); // Redirect to confirmation page after order is placed
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Checkout Steps */}
        <div className="flex justify-center mb-8 space-x-10">
          <Step title="Cart" />
          <Step title="Billing & Address" />
          <Step title="Payment" active />
        </div>

        {/* Checkout Content */}
        <div className="flex gap-8">
          {/* Left Section - Payment Method and Delivery Option */}
          <div className="flex-1 space-y-6">
            {/* Payment Method */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold mb-4">Payment</h2>
              <div className="flex justify-between items-center border p-4 rounded">
                <p>Pay with Your Available Points</p>
                <input type="checkbox" className="w-5 h-5" checked readOnly />
              </div>
            </div>

            {/* Delivery Option */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold mb-4">Delivery</h2>
              <div className="flex justify-between items-center border p-4 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h1l2 7h11l2-7h1"
                      />
                    </svg>
                  </div>
                  <div>Standard</div>
                </div>
                <div className="text-gray-500">3-5 days delivery</div>
              </div>
            </div>

            <button className="text-green-600 hover:underline mt-4">Back</button>
          </div>

          {/* Right Section - Address and Order Summary */}
          <div className="w-1/3 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold text-lg mb-4">Address</h2>
              <div className="text-sm space-y-1">
                <p>
                  <strong>{state.selectedAddress.name}</strong>
                </p>
                <p>{state.selectedAddress.address}</p>
                <p>{state.selectedAddress.phone}</p>
              </div>
            </div>

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
                <span className="text-orange-500">{state.totalPoints}</span>
              </div>
            </div>

            <button
              onClick={handleCompleteOrder}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
            >
              Complete Order
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

export default PaymentPage;
