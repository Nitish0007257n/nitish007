// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe");  // Example user name

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const getUserInitial = () => {
    if (userName) {
      return userName.charAt(0).toUpperCase(); // Get the first letter of the user's name
    }
    return ''; // Default if no user name is provided
  };

  return (
    <nav className="bg-[#919EAB14] text-white p-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="font-semibold text-lg" style={{ color: '#00A76F' }}>KIBA LABS</span>
        </div>
        <div className="relative">
          {/* Login/Logout Button */}
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
            onClick={handleLoginLogout} // Toggle login/logout status
          >
            {isLoggedIn ? getUserInitial() : 'Login'}
          </button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
