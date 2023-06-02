import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { token } = useAuth();
  const [isCartUpdate, setIsCardUpdate] = useState(false);

  const priceDetails = cart.reduce(
    (acc, curr) => ({
      quantity: acc.quantity + Number(curr.qty),
      totalPrice: acc.totalPrice + Number(curr.price) * Number(curr.qty),
      totalOriginalPrice:
        acc.totalOriginalPrice + Number(curr.qty) * Number(curr.originalPrice),
    }),
    { quantity: 0, totalPrice: 0, totalOriginalPrice: 0 }
  );

  const getCartData = async () => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: token },
      });
      if (status === 200) {
        setCart(data?.cart);
        setIsCardUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addCartData = async (cartData) => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/cart",
        data: { product: cartData },
        headers: { authorization: token },
      });
      if (status === 201) {
        setCart(data?.cart);
        setIsCardUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeCartData = async (dataId) => {
    setIsCardUpdate(true);
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setCart(data?.cart);
        setIsCardUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeCartQuantity = async (dataId, updateType) => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: "POST",
        data: { action: { type: updateType } },
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setCart(data?.cart);
        setIsCardUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(token)

  useEffect(() => {
    if (token) {
      getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          getCartData,
          addCartData,
          removeCartData,
          changeCartQuantity,
          priceDetails,
          isCartUpdate,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
