// src/App.js
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AppRoutes from './routes/Router';
import OrderHeader from './components/OrderHeader';

const MainLayout = () => {
  const location = useLocation();

  
  let title = '';
  if (location.pathname === '/order') {
    title = 'My Order';
  } else if (location.pathname === '/wishlist') {
    title = 'Wishlist';
  } else {
    title = 'Dashboard'; 
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <OrderHeader title={title} />
        <AppRoutes />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
