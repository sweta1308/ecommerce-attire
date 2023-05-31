import { useAddress } from "../../context/addressContext";
import "./profile.css";
import { NavLink } from "react-router-dom";

export const AddressDetails = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    borderBottom: isActive ? "1px solid var(--primary-color)" : "none",
  });
  const { addressData, removeAddressData, setIsAddressCardVisible } = useAddress();
  return (
    <>
      <h1>Account</h1>
      <div className="profile">
        <div className="links">
          <NavLink style={getStyles} to="/profile">
            Profile
          </NavLink>
          <NavLink style={getStyles} to="/address-details">
            Address
          </NavLink>
        </div>
        <button style={{cursor: 'pointer'}} onClick={() => setIsAddressCardVisible(true)}>ADD NEW ADDRESS</button>
        {addressData.length === 0 && <h2>No addresses added.</h2>}
        {addressData.map(data => {
            const {_id, name, street, city, state, pincode} = data;
            return (
                <div key={_id} className="address-container">
                    <p>{name}</p>
                    <p>{street}</p>
                    <p>{city}, {state}</p>
                    <p>{pincode}</p>
                    <button onClick={() => setIsAddressCardVisible(true)}>Edit</button>
                    <button onClick={() => removeAddressData(_id)}>Delete</button>
                </div>
            )
        })}
      </div>
    </>
  );
};
