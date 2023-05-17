import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import axios from 'axios';
// import { useParams } from "react-router";

const ProductContext = createContext();

export const ProductProdvider = ({children}) => {
    const initialState = {
        isProuductLoading: false,
        isCategoryLoading: false,
        productData: [],
        categoriesData: [],
        product: {}
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

    // const getProduct = async () => {
    //     try {
    //         const {status, data} = await axios({
    //             method: "GET",
    //             url: `/api/products/${productID}`
    //         })
    //         if (status===200) {
    //             console.log(data)
    //             productDispatch({type: 'set_product', payload: data.product})
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const getCategories = async ()=> {
        try {
            const categoryRes = await fetch('/api/categories');
            console.log(await categoryRes.json())
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

    // useEffect(() => {
    //     getProduct()
    // }, [productState.product])

    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)