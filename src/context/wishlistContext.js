import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const WishlistContext = createContext();

export const Wishlistprovider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { token } = useAuth();
  const [isWishlistUpdate, setIsWishlistUpdate] = useState(false);

  const getWishlistData = async () => {
    try {
      setIsWishlistUpdate(true);
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/wishlist",
        headers: { authorization: token },
      });
      if (status === 200) {
        setWishlist(data?.wishlist);
        setIsWishlistUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addWishlistData = async (wishlistData) => {
    try {
      setIsWishlistUpdate(true);
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        data: { product: wishlistData },
        headers: { authorization: token },
      });
      if (status === 201) {
        setWishlist(data?.wishlist);
        setIsWishlistUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeWishlistData = async (dataId) => {
    try {
      setIsWishlistUpdate(true);
      const { status, data } = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setWishlist(data?.wishlist);
        setIsWishlistUpdate(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (token) {
      getWishlistData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <WishlistContext.Provider
        value={{
          wishlist,
          getWishlistData,
          addWishlistData,
          removeWishlistData,
          isWishlistUpdate,
        }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
};

export const useWishlist = () => useContext(WishlistContext);
