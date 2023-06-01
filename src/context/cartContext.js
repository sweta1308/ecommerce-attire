import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {authState} = useAuth();

  const priceDetails = cart.reduce((acc, curr) => ({
    quantity: acc.quantity + Number(curr.qty),
    totalPrice: acc.totalPrice + Number(curr.price) * Number(curr.qty),
    totalOriginalPrice: acc.totalOriginalPrice + Number(curr.qty) * Number(curr.originalPrice),
  }), {quantity: 0, totalPrice:0, totalOriginalPrice:0})
 
  const getCartData = async () => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: authState.token },
      });
      if (status === 200) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addCartData = async (cartData) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/cart",
        data: { product: cartData },
        headers: { authorization: authState.token },
      });
      if (status === 201) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeCartData = async (dataId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: authState.token },
      });
      if (status === 200) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeCartQuantity = async (dataId, updateType) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        data: { action: { type: updateType } },
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: authState.token },
      });
      if (status === 200) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(token)

  useEffect(() => {
    if (authState.token) {
      getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.token]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          getCartData,
          addCartData,
          removeCartData,
          changeCartQuantity, priceDetails
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
