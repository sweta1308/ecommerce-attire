import './orderSummary.css';
import React from 'react';

const OrderSummary: React.FC = () => {
  return (
    <div className="order-summary">
      <i
        className="fa-regular fa-circle-check fa-2xl"
        style={{ color: '#24e916' }}
      ></i>
      <h2>Order Confirmed! Thanks for your order!</h2>
      <small>
        The order confirmation has been sent to the respective company.
      </small>
    </div>
  );
};

export default OrderSummary;
