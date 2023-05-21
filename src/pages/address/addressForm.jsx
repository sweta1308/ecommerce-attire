import { useAddress } from "../../context/addressContext";
import "./address.css";

export const AddressForm = () => {
  const { addressData, setIsAddressCardVisible, checkout, setCheckout } = useAddress();
  return (
    <>
      <div className="address-form">
        <h2>Select Address</h2>
        {addressData.map((data) => {
          const { _id, name, street, city, state, pincode } = data;
          return (
            <div key={_id} className="address-list">
              <input
                type="radio"
                name="address"
                checked={checkout && checkout._id === _id}
                onChange={() => setCheckout(data)}
              />
              <div className="address-data">
                <h3>{name}</h3>
                <p>{street},</p>
                <p>
                  {city}, {state}
                </p>
                <p>Pincode: {pincode}</p>
              </div>
            </div>
          );
        })}
        <button onClick={() => setIsAddressCardVisible(true)}>
          Add New Address
        </button>
      </div>
    </>
  );
};
