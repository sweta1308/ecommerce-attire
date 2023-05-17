import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const initialFilter = {
        price: 10000,
        category: [], 
        brands: [],
        rating: 5,
        sort: ''
    }
    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilter)
    return (
        <>
            <FilterContext.Provider value={{filterState, filterDispatch}}>
                {children}
            </FilterContext.Provider>
        </>
    )
}

export const useFilters = () => useContext(FilterContext)