import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducer/filterReducer';
import { useProducts } from './productContext';

const FilterContext: any = createContext<
  { state: any; dispatch: any } | undefined
>(undefined);

export const FilterProvider = ({ children }: any) => {
  const { productState }: any = useProducts();
  const initialFilter = {
    category: [],
    brands: [],
    rating: 5,
    sort: 'featured',
    search: '',
    includeOutOfStock: false,
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter,
  );

  let filteredData = productState?.productData.filter(
    (data: any) => !data.outOfStock,
  );

  if (filterState.includeOutOfStock) {
    filteredData = productState?.productData;
  }

  if (filterState.category.length > 0) {
    filteredData = filteredData.filter((data: any) =>
      filterState.category.includes(data.categoryName),
    );
  }

  if (filterState.brands.length > 0) {
    filteredData = filteredData.filter((data: any) =>
      filterState.brands.includes(data.brand),
    );
  }

  if (filterState.rating >= 0) {
    filteredData = filteredData.filter(
      (data: any) => data.ratings.value <= filterState.rating,
    );
  }

  if (filterState.search.length > 0) {
    filteredData = filteredData.filter(
      (data: any) =>
        data.title.toLowerCase().includes(filterState.search.toLowerCase()) ||
        data.brand.toLowerCase().includes(filterState.search.toLowerCase()),
    );
  }

  if (filterState.sort === 'high-to-low') {
    filteredData = [...filteredData].sort((a, b) => b.price - a.price);
  } else if (filterState.sort === 'low-to-high') {
    filteredData = [...filteredData].sort((a, b) => a.price - b.price);
  } else if (filterState.sort === 'featured') {
    filteredData = [...filteredData];
  }

  return (
    <>
      <FilterContext.Provider
        value={{ filterState, filterDispatch, filteredData }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export const useFilters = () => useContext(FilterContext);
