import { createContext, useContext, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const Wishlistprovider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);
    const token = localStorage.getItem('token')

    const getWishlistData = async() => {
        try {
            const {data, status} = await axios({
                method: 'GET',
                url: '/api/user/wishlist',
                headers: {authorization: token}
            })
            if (status === 200) {
                setWishlist(data?.wishlist)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const addWishlistData = async(wishlistData) => {
        try {
            const {data, status} = await axios({
                method: "POST",
                url: '/api/user/wishlist',
                data: {product: wishlistData},
                headers: {authorization: token}
            })
            if (status === 201) {
                setWishlist(data?.wishlist)
            }
        } catch(e) {
            console.log(e)
        }
    }

    const removeWishlistData = async(dataId) => {
        try {
            const {status, data} = await axios({
                method: 'DELETE',
                url: `/api/user/wishlist/${dataId}`,
                headers: {authorization: token}
            })
            if (status === 200) {
                setWishlist(data?.wishlist)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <WishlistContext.Provider value={{wishlist, getWishlistData, addWishlistData, removeWishlistData}}>
                {children}
            </WishlistContext.Provider>
        </>
    )
}

export const useWishlist = () => useContext(WishlistContext)