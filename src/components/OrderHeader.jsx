// src/OrderHeader.js
import React from 'react';
import PropTypes from 'prop-types';

const OrderHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-4">
        {/* Additional header controls can go here */}
      </div>
    </div>
  );
};

OrderHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderHeader;
