import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './authContext';

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const WishlistContext = createContext();

export const WishlistProvider = ({ children }: any) => {
  const [wishlist, setWishlist] = useState([]);
  // @ts-expect-error TS(2339): Property 'token' does not exist on type 'unknown'.
  const { token } = useAuth();
  const [isWishlistUpdate, setIsWishlistUpdate] = useState(false);

  const getWishlistData = async () => {
    try {
      setIsWishlistUpdate(true);
      const { data, status } = await axios({
        method: 'GET',
        url: '/api/user/wishlist',
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

  const addWishlistData = async (wishlistData: any) => {
    try {
      setIsWishlistUpdate(true);
      const { data, status } = await axios({
        method: 'POST',
        url: '/api/user/wishlist',
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

  const removeWishlistData = async (dataId: any) => {
    try {
      setIsWishlistUpdate(true);
      const { status, data } = await axios({
        method: 'DELETE',
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
