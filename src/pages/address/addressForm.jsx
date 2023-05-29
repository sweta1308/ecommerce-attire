import { useState } from "react";
import { useAddress } from "../../context/addressContext";
import "./address.css";

export const AddressForm = () => {
  const { addressData, setIsAddressCardVisible, checkout, setCheckout, removeAddressData } =
    useAddress();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="address-form">
        <h2>Select Address</h2>
        {addressData.length === 0 && <h2>No addresses added.</h2>}
        {addressData.map((data) => {
          const { _id, name, street, city, state, pincode } = data;
          return (
            <div key={_id} className="address-list">
              <input
                type="radio"
                name="address"
                checked={checkout && checkout._id === _id}
                onChange={() => setCheckout(data)}
                disabled={isEditing}
              />
              <div className="address-data">
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      value={name}
                      placeholder="Enter Name"
                      onChange={(e) =>
                        setCheckout({ ...checkout, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      value={street}
                      placeholder="Enter street"
                      onChange={(e) =>
                        setCheckout({ ...checkout, street: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      value={city}
                      placeholder="Enter city"
                      onChange={(e) =>
                        setCheckout({ ...checkout, city: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      value={state}
                      placeholder="Enter state"
                      onChange={(e) =>
                        setCheckout({ ...checkout, state: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      value={pincode}
                      placeholder="Enter pincode"
                      onChange={(e) =>
                        setCheckout({ ...checkout, pincode: e.target.value })
                      }
                    />
                  </div>
                ) : (
                  <div>
                    <h3>{name}</h3>
                    <p>{street},</p>
                    <p>
                      {city}, {state}
                    </p>
                    <p>Pincode: {pincode}</p>
                  </div>
                )}

                <div className="address-btn">
                  <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'} Address
                  </button>
                  <button onClick={() => removeAddressData(_id)}>Delete Address</button>
                </div>
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
