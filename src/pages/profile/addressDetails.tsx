import { NavLink } from 'react-router-dom';
import { AddressCard } from '../../components/address/addressCard';
import { useAddress } from '../../context/addressContext';
import './profile.css';

const AddressDetails = () => {
  const {
    addressData,
    removeAddressData,
    setIsAddressCardVisible,
    isAddressCardVisible,
    setCheckout,
    setIsEditBtn,
  }: any = useAddress();

  const getStyles = (isActive: any) => ({
    color: isActive ? 'var(--primary-color)' : 'black',
    borderBottom: isActive ? '1px solid var(--primary-color)' : 'none',
  });

  const handleAddAddress = () => {
    setIsAddressCardVisible(true);
    setCheckout({
      name: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
    });
  };

  const handleEditAddress = (data: any) => {
    setIsAddressCardVisible(true);
    setCheckout(data);
    setIsEditBtn(true);
  };

  const handleDeleteAddress = (id: number) => {
    removeAddressData(id);
    setCheckout({
      _id: '',
      name: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
    });
  };

  return (
    <div>
      <div style={{ filter: isAddressCardVisible ? 'blur(10px)' : '' }}>
        <h1>Account</h1>

        <div className="profile address">
          <div className="links">
            <NavLink style={getStyles} to="/profile">
              Profile
            </NavLink>

            <NavLink style={getStyles} to="/address-details">
              Address
            </NavLink>
          </div>

          <button
            className="add-address"
            style={{ cursor: 'pointer' }}
            onClick={handleAddAddress}
          >
            + ADD NEW ADDRESS
          </button>

          {addressData.length === 0 && <h2>No addresses added.</h2>}
          {addressData.map((data: any) => {
            const { _id, name, street, city, state, pincode } = data;
            return (
              <div key={_id} className="address-container">
                <p>{name}</p>
                <p>{street}</p>
                <p>
                  {city}, {state}
                </p>
                <p>{pincode}</p>
                <button onClick={() => handleEditAddress(data)}>Edit</button>
                <button onClick={() => handleDeleteAddress(_id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
      {isAddressCardVisible && <AddressCard />}
    </div>
  );
};

export default AddressDetails;
