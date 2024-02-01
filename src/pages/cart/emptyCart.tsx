import React from 'react';
import { useNavigate } from 'react-router';
import { cartEmpty } from '../../assets';
import './cart.css';

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="empty-cart-items">
      <img src={cartEmpty} alt="cart" />
      <h3>Your cart is empty!</h3>
      <p>
        Looks like you haven't added anything to your cart. Go ahead and explore
        our top categories.
      </p>
      <button onClick={handleShopNow}>Shop Now</button>
    </div>
  );
};

export default EmptyCart;
