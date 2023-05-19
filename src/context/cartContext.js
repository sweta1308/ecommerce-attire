import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const {token: encodedToken} = useAuth();

    const getCartData = async() => {
        try {
            const {data, status} = await axios({
                method: 'GET',
                url: '/api/user/cart',
                headers: {authorization: encodedToken}
            });
            if (status === 200) {
                setCart(data?.cart)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const addCartData = async(cartData) => {
        try {
            const {data, status} = await axios({
                method: "POST",
                url: "/api/user/cart",
                data: {product: cartData},
                headers: {authorization: encodedToken}
            })
            if (status === 201) {
                setCart(data?.cart)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <CartContext.Provider value={{cart, getCartData, addCartData}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)