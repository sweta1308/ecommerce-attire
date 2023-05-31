import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { editAddressService } from "../utils/editAddress";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addressData, setAddressData] = useState([]);
  const token = localStorage.getItem("token");
  const [isAddressCardVisible, setIsAddressCardVisible] = useState(false);
  const checkoutInitial = {
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  };

  const [checkout, setCheckout] = useState(checkoutInitial);

  const getAddressData = async () => {
    try {
      const { status, data } = await axios({
        method: "GET",
        url: "/api/user/address",
        headers: { authorization: token },
      });
      if (status === 200) {
        setAddressData(data?.address);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addAddressData = async (addressData) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/address",
        data: { address: addressData },
        headers: { authorization: token },
      });
      if (status === 201) {
        setAddressData(data?.address);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editAddress = async (addressInput, addressId) => {
    try {
      const response = await editAddressService(addressInput, addressId, token);
      const { status, data } = response;
      if (status === 201) {
        setAddressData(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeAddressData = async (dataId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/address/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setAddressData(data?.address);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <AddressContext.Provider
        value={{
          addressData,
          addAddressData,
          removeAddressData,
          checkout,
          setCheckout,
          isAddressCardVisible,
          setIsAddressCardVisible,
          editAddress,
        }}
      >
        {children}
      </AddressContext.Provider>
    </>
  );
};

export const useAddress = () => useContext(AddressContext);
