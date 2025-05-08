import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Content */}
      <main className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-3xl font-semibold">Bag</div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Wishlist</a>
              <a href="#" className="hover:underline">My Order</a>
            </div>
            <div className="font-semibold">ABC Admin</div>
          </div>
        </div>

        {/* Cart Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-16 text-gray-400 text-sm font-semibold">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">1</div>
                <span className="mt-2 text-black">Cart</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400">2</div>
                <span className="mt-2">Billing & address</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400">3</div>
                <span className="mt-2">Payment</span>
              </div>
            </div>
          </div>

          {/* Cart Items and Order Summary */}
          <div className="flex gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Cart (2)</h3>
              <div className="border rounded-lg p-4 space-y-4">
                {/* Item 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="https://via.placeholder.com/60" alt="Black Hoodie" className="w-16 h-16 object-cover rounded"/>
                    <div>
                      <p className="font-semibold">Classic Black Hoodie</p>
                      <p className="text-xs text-gray-400">Size: M</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>1200</p>
                    <div className="flex items-center border rounded">
                      <button className="px-2">-</button>
                      <span className="px-2">1</span>
                      <button className="px-2">+</button>
                    </div>
                    <p>1200</p>
                    <button className="text-gray-400 hover:text-red-500">
                      &#128465;
                    </button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="https://via.placeholder.com/60" alt="White Hoodie" className="w-16 h-16 object-cover rounded"/>
                    <div>
                      <p className="font-semibold">Classic White Hoodie</p>
                      <p className="text-xs text-gray-400">Size: M</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>1200</p>
                    <div className="flex items-center border rounded">
                      <button className="px-2">-</button>
                      <span className="px-2">1</span>
                      <button className="px-2">+</button>
                    </div>
                    <p>1200</p>
                    <button className="text-gray-400 hover:text-red-500">
                      &#128465;
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-4">
                <a href="#" className="text-sm text-gray-600 hover:underline">&larr; Continue shopping</a>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-1/3">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="border rounded-lg p-4 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal (2 items)</span>
                  <span>2400</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between font-semibold text-black pt-2 border-t">
                  <span>Total</span>
                  <span className="text-red-500">2400</span>
                </div>
              </div>

              {/* Place Order */}
              <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800">
                Place order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
