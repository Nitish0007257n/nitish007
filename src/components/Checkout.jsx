import React from 'react';

const Checkout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Checkout Steps */}
        <div className="flex justify-center mb-8 space-x-10">
          <Step title="Cart" active />
          <Step title="Billing & address" active />
          <Step title="Payment" active />
        </div>

        {/* Checkout Content */}
        <div className="flex gap-8">
          {/* Left Section */}
          <div className="flex-1 bg-white p-6 rounded shadow space-y-6">
            {/* Payment Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Payment</h2>
              <div className="bg-gray-100 p-4 rounded flex items-center justify-between">
                <span>Pay with Your Available Points</span>
                <input type="checkbox" className="toggle toggle-success" checked readOnly />
              </div>
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Delivery</h2>
              <div className="bg-gray-100 p-4 rounded border-2 border-black">
                <p className="font-semibold">Standard</p>
                <p className="text-sm text-gray-600">3-5 days delivery</p>
              </div>
            </div>

            <button className="text-green-600 hover:underline mt-4">Back</button>
          </div>

          {/* Right Section */}
          <div className="w-1/3 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold text-lg mb-4">Address</h2>
              <p>Gaurav Chaudhary (Honi)</p>
              <p>8141 Nathan Drive Ste B19 - Burlington, VT 05408</p>
              <p>904-652-2058</p>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>1200</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>-</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Points</span>
                <span>1200</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
              Complete order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Corrected Step Component
const Step = ({ title, active }) => (
  <div className="flex flex-col items-center">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${active ? 'bg-green-600' : 'bg-gray-400'}`}>
      {active ? '✓' : ''}
    </div>
    <p className="mt-2 text-sm">{title}</p>
  </div>
);

export default Checkout;
