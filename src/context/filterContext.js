import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { useProducts } from "./productContext";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const {productState} = useProducts();
    const initialFilter = {
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

    if (filterState.rating >= 0) {
        filteredData = filteredData.filter(data => data.ratings.value <= filterState.rating)
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