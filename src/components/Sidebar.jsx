// src/Sidebar.js
import React from 'react';
import { FaHome, FaShoppingBag } from 'react-icons/fa';
import logo from '../assets/77542878addc224c184e14585c912798fb3b94cf (1).png'; // adjust path if needed

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
     <div className="h-16 flex items-center justify-start px-4 border-b border-gray-700">
  <img src={logo} alt="Logo" className="h-10 object-contain" />
</div>
      <nav className="flex-1 p-4">
        <div className="text-sm text-gray-400 uppercase mb-4 tracking-wider">
          Dashboard
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-gray-300">
            <FaHome />
            Home
          </li>
          <li className="flex items-center gap-2 text-green-400 cursor-pointer hover:text-green-300">
            <FaShoppingBag />
            Rewards
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
