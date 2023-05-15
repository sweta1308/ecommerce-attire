import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProdvider = ({children}) => {
    const [productData, setproductData] = useState([])
    const getData = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            setproductData(data?.products)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ProductContext.Provider value={{productData}}>{children}</ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)