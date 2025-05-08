// src/Table.js
import React from 'react';

const Table = () => {
  return (
   <>
   <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
<div className="flex space-x-6">
  <div>
    <label className="block text-sm text-gray-700">Start Date</label>
    <input type="date" className="px-3 py-2 border rounded-md text-gray-700" />
  </div>
  <div>
    <label className="block text-sm text-gray-700">End Date</label>
    <input type="date" className="px-3 py-2 border rounded-md text-gray-700" />
  </div>
</div>
<div className="flex space-x-6">
  <div className="flex items-center space-x-2">
    <button className="text-gray-700 hover:text-gray-900">
      <span className="material-icons">shopping_bag</span> {/* Bag Icon */}
    </button>
    <span>My Bag</span>
  </div>
  <div className="flex items-center space-x-2">
    <button className="text-gray-700 hover:text-gray-900">
      <span className="material-icons">favorite_border</span> {/* Wishlist Icon */}
    </button>
    <span>Wishlist</span>
  </div>
  <div className="flex items-center space-x-2">
    <button className="text-gray-700 hover:text-gray-900">
      <span className="material-icons">favorite_border</span> {/* Wishlist Icon */}
    </button>
    <span>Wishlist</span>
  </div>
</div>
</div>

    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3">My Product</th>
              <th className="px-6 py-3">Order Date</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Funds</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Row 1 */}
            <tr>
              <td className="px-6 py-4 flex items-center space-x-4">
                <img src="https://via.placeholder.com/40" alt="product" className="w-10 h-10 rounded" />
                <span>Classic White Hoodie</span>
              </td>
              <td className="px-6 py-4">08 Aug 2022</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">$420</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">Checked</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-red-500 hover:text-red-700">🗑️</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-6 py-4 flex items-center space-x-4">
                <img src="https://via.placeholder.com/40" alt="product" className="w-10 h-10 rounded" />
                <span>Female White Shirt</span>
              </td>
              <td className="px-6 py-4">08 Aug 2022</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">$590</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">Checked</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-red-500 hover:text-red-700">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   
   
   
   </>
  );
};

export default Table;





