import { createContext, useContext } from "react";

const WishlistContext = createContext();

export const Wishlistprovider = ({children}) => {
    return (
        <>
            <WishlistContext.Provider>
                {children}
            </WishlistContext.Provider>
        </>
    )
}

export const useWishlist = () => useContext(WishlistContext)