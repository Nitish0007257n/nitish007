// src/routes/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Table from '../components/Table';
import RewardsPage from '../components/RewardsPage';
import RewardProductPage from '../components/RewardProductPage';
import WishlistPage from '../components/WishlistPage';
import MyOrderPage from '../components/MyOrderPage';
import CartPage from '../components/CartPage';
import Checkout from '../components/Checkout';
import BillingAddress from '../components/BillingAddress';
import PaymentPage from '../components/PaymentPage';
import OrderSuccessPage from '../components/OrderSuccessPage';
import CheckoutPage from '../components/CheckoutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RewardsPage />} />
      <Route path="/table" element={<Table />} />
      <Route path="/reward-product/:id" element={<RewardProductPage />} />
      <Route path="/wishlistPage" element={<WishlistPage />} />
      <Route path="/myorderpage" element={<MyOrderPage />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/billingaddress" element={<BillingAddress />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
      <Route path="/success" element={<OrderSuccessPage />} />
      <Route path="/CheckoutPage" element={<CheckoutPage/>} />
    </Routes>
  );
};

export default AppRoutes;
