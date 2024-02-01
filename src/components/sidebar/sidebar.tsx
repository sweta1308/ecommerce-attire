import { useFilters } from '../../context/filterContext';
import { useProducts } from '../../context/productContext';
import './sidebar.css';

export const SideBar = ({ isFilterVisible }: any) => {
  const { productState }: any = useProducts();
  const { filterDispatch, filterState }: any = useFilters();

  const handleClearFilters = () => {
    filterDispatch({ type: 'clear_filters' });
  };

  const handleCategoryFilter = (categoryName: string) => {
    filterDispatch({
      type: 'filter_by_category',
      payload: categoryName,
    });
  };

  const handleBrandFilter = (brandName: string) => {
    filterDispatch({
      type: 'filter_by_brands',
      payload: brandName,
    });
  };

  const handleRatingFilter = (rating: string) => {
    filterDispatch({
      type: 'filter_by_rating',
      payload: rating,
    });
  };

  const handleSortFilter = (sortType: string) => {
    filterDispatch({
      type: 'filter_by_sort',
      payload: sortType,
    });
  };

  const handleAvailabilityFilter = () => {
    filterDispatch({
      type: 'filter_by_availability',
      payload: !filterState.includeOutOfStock,
    });
  };

  return (
    <>
      <div
        className='filters'
        style={{ display: isFilterVisible ? 'block' : '' }}
      >
        <div className='filter'>
          <h2>Filters</h2>
          <button onClick={handleClearFilters}>Clear Filters</button>
        </div>

        <h4>Category</h4>

        <div className='category-filter'>
          {productState?.categoriesData.map(({ categoryName }: any) => (
            <div key={categoryName}>
              <label>
                <input
                  type='checkbox'
                  checked={filterState?.category.includes(categoryName)}
                  onChange={() => handleCategoryFilter(categoryName)}
                />{' '}
                {categoryName}
              </label>
            </div>
          ))}
        </div>

        <h4>Brands</h4>

        <div className='brand-filter'>
          <label>
            <input
              type='checkbox'
              checked={filterState?.brands.includes('H&M')}
              onChange={() => handleBrandFilter('H&M')}
            />{' '}
            H&M
          </label>

          {/* Other brand checkboxes... */}
        </div>

        <h4>Ratings</h4>

        <div className='price-filter'>
          <input
            type='range'
            className='slider'
            min='0'
            max='5'
            value={filterState.rating}
            list='numbers'
            onChange={(e) => handleRatingFilter(e.target.value)}
          />

          <datalist id='numbers'>
            <option value='1'></option>
            {/* Other rating options... */}
          </datalist>
        </div>

        <h4>Sort By Price:</h4>

        <div className='price-filter'>
          <label>
            <input
              type='radio'
              name='sort'
              checked={filterState.sort === 'featured'}
              onChange={() => handleSortFilter('featured')}
            />{' '}
            Featured
          </label>

          {/* Other sort options... */}
        </div>

        <h4>Availability</h4>

        <div className='stock-filter'>
          <label>
            <input
              type='checkbox'
              checked={filterState.includeOutOfStock}
              onChange={handleAvailabilityFilter}
            />{' '}
            Include Out of Stock
          </label>
        </div>
      </div>
    </>
  );
};
