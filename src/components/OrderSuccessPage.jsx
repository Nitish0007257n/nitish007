import React from 'react';

const OrderSuccessPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Thank you for your purchase!</h2>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
            alt="Success" 
            className="w-24 h-24 mb-6" 
          />
          <p className="text-gray-700 text-center mb-2">
            Thanks for placing your order:
          </p>
          <p className="text-green-600 font-semibold text-center mb-4">
            ORDER#12345 has been successfully placed!
          </p>
          <p className="text-gray-500 text-center text-sm mb-6">
            We will send you an email confirmation. Please check inbox.
            If you have any questions, feel free to contact us.
          </p>
          <p className="text-gray-700 text-center mb-6">All the best!</p>
          <button className="px-6 py-3 rounded bg-black text-white hover:bg-gray-800">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
