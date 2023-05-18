import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { useProducts } from "./productContext";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const {productState} = useProducts();
    const initialFilter = {
        price: 10000,
        category: [], 
        brands: [],
        rating: 5,
        sort: ''
    }
    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilter);

    let filteredData = [...productState?.productData]

    if (filterState.category.length > 0) {
        filteredData = filteredData.filter(data => filterState.category.includes(data.categoryName))
    }

    if (filterState.brands.length > 0) {
        filteredData = filteredData.filter(data => filterState.brands.includes(data.brand))
    }

    return (
        <>
            <FilterContext.Provider value={{filterState, filterDispatch, filteredData}}>
                {children}
            </FilterContext.Provider>
        </>
    )
}

export const useFilters = () => useContext(FilterContext)