import { useAddress } from "../../context/addressContext";
import "./addressCard.css";
import { toast } from "react-toastify";
import {v4 as uuid} from 'uuid';

export const AddressCard = () => {
  const {
    checkout,
    setCheckout,
    isAddressCardVisible,
    setIsAddressCardVisible,
    addAddressData,
    isEditBtn,
    setIsEditBtn,
    editAddress,
    addressData,
  } = useAddress();

  const handleAddAddress = () => {
    const addressExist = addressData.find(
      (address) => address._id === checkout._id
    );
    if (addressExist) {
      editAddress(checkout, addressExist._id);
    } else {
      if (
        checkout.name.trim() ||
        checkout.street.trim() ||
        checkout.city.trim() ||
        checkout.state.trim() ||
        checkout.pincode.trim()
      ) {
        addAddressData({...checkout, _id: uuid()});
        setCheckout({
          ...checkout,
          _id: "",
          name: "",
          street: "",
          city: "",
          state: "",
          pincode: "",
        });
      } else {
        toast.warning("Fill all the data!");
      }
    }
    setIsAddressCardVisible(false);
    setIsEditBtn(false);
  };

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
          onChange={(e) => setCheckout({ ...checkout, name: e.target.value })}
          required
        />
        <label for="street">Street: </label>
        <input
          id="street"
          placeholder="114, New Colony"
          value={checkout.street}
          onChange={(e) => setCheckout({ ...checkout, street: e.target.value })}
          required
        />
        <label for="city">City: </label>
        <input
          id="city"
          placeholder="Baripada"
          value={checkout.city}
          onChange={(e) => setCheckout({ ...checkout, city: e.target.value })}
          required
        />
        <label for="city">State: </label>
        <input
          id="city"
          placeholder="Odisha"
          value={checkout.state}
          onChange={(e) => setCheckout({ ...checkout, state: e.target.value })}
          required
        />
        <label for="pincode">Pincode: </label>
        <input
          id="pincode"
          placeholder="757001"
          value={checkout.pincode}
          onChange={(e) =>
            setCheckout({ ...checkout, pincode: e.target.value })
          }
          required
        />
        <button onClick={handleAddAddress}>
          {isEditBtn ? "Save Address" : "Add Address"}
        </button>
      </div>
    </>
  );
};
