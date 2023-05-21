import { useAddress } from "../../context/addressContext";
import "./addressCard.css";

export const AddressCard = () => {
  const {
    checkout,
    setCheckout,
    isAddressCardVisible,
    setIsAddressCardVisible, addAddressData
  } = useAddress();
//   const { name, street, city, state, pincode } = checkout;

  const handleAddAddress = () => {
    if (checkout.name.trim()||checkout.street.trim()||checkout.city.trim()||checkout.state.trim()||checkout.pincode.trim()) {
        addAddressData(checkout);
        setIsAddressCardVisible(false);
        setCheckout({...checkout, name: '', street: '', city: '', state: '', pincode: ''})
    }else {
        alert('Fill all the data')
    }
  }

  return (
    <>
      <div
        className="address-card"
        style={{ display: isAddressCardVisible ? "" : "none" }}
      >
        <i
          onClick={() => setIsAddressCardVisible(false)}
          class="fa-solid fa-xmark"
        ></i>
        <h3>Enter Your Address</h3>
        <label for="name">Name: </label>
        <input
          id="name"
          placeholder="Adarsh Balika"
          value={checkout.name}
          onChange={(e) =>
            setCheckout({...checkout, name: e.target.value})
          }
        />
        <label for="street">Street: </label>
        <input
          id="street"
          placeholder="114, New Colony"
          value={checkout.street}
          onChange={(e) =>
            setCheckout({...checkout, street: e.target.value})
          }
        />
        <label for="city">City: </label>
        <input
          id="city"
          placeholder="Baripada"
          value={checkout.city}
          onChange={(e) =>
            setCheckout({...checkout, city: e.target.value})
          }
        />
        <label for="city">State: </label>
        <input
          id="city"
          placeholder="Odisha"
          value={checkout.state}
          onChange={(e) =>
            setCheckout({...checkout, state: e.target.value})
          }
        />
        <label for="pincode">Pincode: </label>
        <input
          id="pincode"
          placeholder="757001"
          value={checkout.pincode}
          onChange={(e) =>
            setCheckout({...checkout, pincode: e.target.value})
          }
        />
        <button onClick={handleAddAddress}>
          Add Address
        </button>
      </div>
    </>
  );
};
