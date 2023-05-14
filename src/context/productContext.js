import { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProdvider = ({children}) => {

    return (
        <ProductContext.Provider>{children}</ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)