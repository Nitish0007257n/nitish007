import React from "react";

const MyOrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Content */}
      <main className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-3xl font-semibold">My Order</div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Shop</a>
              <a href="#" className="hover:underline">My Order</a>
            </div>
            <div className="font-semibold">ABC Admin</div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Order Info */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Order #6079</h2>
              <p className="text-sm text-gray-500 mt-1">12 Aug 2023, 10:00 PM</p>
            </div>
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
              Completed
            </span>
          </div>

          {/* Summary and Shipping */}
          <div className="flex gap-8">
            {/* Order Summary */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="border rounded-lg p-4">
                {/* Item 1 */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold">Glante White Hoodie</p>
                    <p className="text-xs text-gray-400">SKU: 189-HU09</p>
                  </div>
                  <p className="font-semibold">1200</p>
                </div>
                {/* Item 2 */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold">Glante Black Hoodie</p>
                    <p className="text-xs text-gray-400">SKU: 189-UR07</p>
                  </div>
                  <p className="font-semibold">1200</p>
                </div>

                {/* Price Summary */}
                <div className="border-t mt-4 pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between font-semibold text-black pt-2 border-t">
                    <span>Total</span>
                    <span>2,400</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="w-1/3">
              <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
              <div className="border rounded-lg p-4 space-y-2 text-sm text-gray-700">
                <p><strong>Danvir Choudhary</strong></p>
                <p>1847 Room Drive Suite 810, Burlington, VT / 82021</p>
                <p>90-968-2386</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">History</h3>
            <div className="border rounded-lg p-4 space-y-4 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Delivery successful
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                Order has been created
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrderPage;
