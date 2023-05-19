import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    return (
        <>
            <CartContext.Provider>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)