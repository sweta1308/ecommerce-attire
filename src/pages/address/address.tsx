import React from 'react';
import { useNavigate } from 'react-router';
import { AddressCard } from '../../components/address/addressCard';
import { useAddress } from '../../context/addressContext';
import { AddressForm } from './addressForm';
import { CheckoutCard } from './checkoutCard';

const Address: React.FC = () => {
  const { isAddressCardVisible }: any = useAddress();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleAddressClick = () => {
    navigate('/address');
  };

  return (
    <div className="address">
      <p className="text add-check">
        <span onClick={handleCartClick}>Cart</span>{' '}
        <i className="fa-solid fa-angle-right fa-xs"></i>{' '}
        <span onClick={handleAddressClick}>Address</span>
      </p>

      <div className={`address-checkout ${isAddressCardVisible ? 'blur' : ''}`}>
        <AddressForm />
        <CheckoutCard />
      </div>

      <AddressCard />
    </div>
  );
};

export default Address;
