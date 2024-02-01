import './address.css';
import { useAddress } from '../../context/addressContext';

export const AddressForm = () => {
  const { addressData, setIsAddressCardVisible, checkout, setCheckout }: any =
    useAddress();

  const handleAddressSelection = (data: any) => {
    setCheckout(data);
  };

  const handleAddNewAddress = () => {
    setIsAddressCardVisible(true);
    setCheckout({
      name: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
    });
  };

  return (
    <div className="address-form">
      <h2>Select Address</h2>
      {addressData.length === 0 && <h2>No addresses added.</h2>}
      {addressData.map((data: any) => {
        const { _id, name, street, city, state, pincode } = data;
        return (
          <div key={_id} className="address-list">
            <input
              type="radio"
              name="address"
              checked={checkout._id === _id}
              onChange={() => handleAddressSelection(data)}
            />

            <div className="address-data">
              <div>
                <h3>{name}</h3>
                <p>{street},</p>
                <p>
                  {city}, {state}
                </p>
                <p>{pincode}</p>
              </div>
            </div>
          </div>
        );
      })}

      <button onClick={handleAddNewAddress}>+ ADD NEW ADDRESS</button>
    </div>
  );
};
