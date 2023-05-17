import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import axios from 'axios';

const ProductContext = createContext();

export const ProductProdvider = ({children}) => {
    const initialState = {
        isProuductLoading: false,
        isCategoryLoading: false,
        productData: [],
        categoriesData: [],
    }
    const [productState, productDispatch] = useReducer(productReducer, initialState)

    const getData = async () => {
        try {
            const {status, data} = await axios({
                method: 'GET',
                url: '/api/products'
            });
            if(status===200) {
                productDispatch({type: 'set_products', payload: data.products})
            }
        } catch (e) {
            console.log(e)
        }
    }

    const getCategories = async ()=> {
        try {
            const {status, data} = await axios({
                method: 'GET',
                url: '/api/categories'
            });
            if (status === 200) {
                productDispatch({type: 'set_category', payload: data.categories})
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)