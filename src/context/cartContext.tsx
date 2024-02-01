import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from 'react';
import axios from 'axios';
import { useAuth } from './authContext';

interface CartItem {
  qty: number;
  price: number;
  originalPrice: number;
}

interface CartContextProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  getCartData: () => void;
  addCartData: (cartData: CartItem) => void;
  removeCartData: (dataId: string) => void;
  changeCartQuantity: (dataId: string, updateType: string) => void;
  priceDetails: {
    quantity: number;
    totalPrice: number;
    totalOriginalPrice: number;
  };
  isCartUpdate: boolean;
  children: React.ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { token }: any = useAuth();
  const [isCartUpdate, setIsCardUpdate] = useState(false);

  const priceDetails = cart.reduce(
    (acc, curr) => ({
      quantity: acc.quantity + Number(curr.qty),
      totalPrice: acc.totalPrice + Number(curr.price) * Number(curr.qty),
      totalOriginalPrice:
        acc.totalOriginalPrice + Number(curr.qty) * Number(curr.originalPrice),
    }),
    { quantity: 0, totalPrice: 0, totalOriginalPrice: 0 },
  );

  const getCartData = async () => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: 'GET',
        url: '/api/user/cart',
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

  const addCartData = async (cartData: CartItem) => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: 'POST',
        url: '/api/user/cart',
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

  const removeCartData = async (dataId: string) => {
    setIsCardUpdate(true);
    try {
      const { data, status } = await axios({
        method: 'DELETE',
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

  const changeCartQuantity = async (dataId: string, updateType: string) => {
    try {
      setIsCardUpdate(true);
      const { data, status } = await axios({
        method: 'POST',
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

  useEffect(() => {
    if (token) {
      getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const cartContextValue: CartContextProps = {
    cart,
    setCart,
    getCartData,
    addCartData,
    removeCartData,
    changeCartQuantity,
    priceDetails,
    isCartUpdate,
    children,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartContext;
};
