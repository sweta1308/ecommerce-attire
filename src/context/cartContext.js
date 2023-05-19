import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem('token')
    // console.log(token)
    const getCartData = async() => {
       
        try {
            const {data, status} = await axios({
                method: 'GET',
                url: '/api/user/cart',
                headers: {authorization: token}
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
                headers: {authorization: token}
            })
            if (status === 201) {
                setCart(data?.cart)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const removeCartData = async(dataId) => {
        try {
            const {data, status} = await axios({
                method: "DELETE",
                url: `/api/user/cart/${dataId}`,
                headers: {authorization: token}
            })
            if (status === 200) {
                setCart(data?.cart)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const changeCartQuantity = async(dataId, updateType) => {
        try {
            const {data, status} = await axios({
                method: "POST",
                data: {action: {type: updateType}},
                url: `/api/user/cart/${dataId}`,
                headers: {authorization: token}
            })
            if (status === 200) {
                setCart(data?.cart)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCartData()
    })

    return (
        <>
            <CartContext.Provider value={{cart, setCart, getCartData, addCartData, removeCartData, changeCartQuantity}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)