import { useFilters } from '../../context/filterContext';
import { useProducts } from '../../context/productContext'
import './sidebar.css'

export const SideBar = ({isFilterVisible}) => {
    const {productState} = useProducts();
    const {filterDispatch, filterState} = useFilters();
    return (
        <>
            <div className="filters" style={{display: isFilterVisible ? 'block' : ''}}>
                <div className='filter'>
                    <h2>Filters</h2>
                    <button>Clear Filters</button>
                </div>

                <h4>Category</h4>
                <div className="category-filter">
                    {productState?.categoriesData.map(({categoryName}) => (
                        <div key={categoryName}>
                            <label>
                                <input type='checkbox' checked={filterState?.category.includes(categoryName)} onChange={() => filterDispatch({type: 'FILTER_BY_CATEGORY', payload: categoryName})} /> {categoryName}
                            </label>
                        </div>
                    ))}
                </div>

                <h4>Brands</h4>
                <div className="brand-filter">
                    <label><input type="checkbox" /> H&M</label>
                    <label><input type="checkbox" /> Sassafras</label>
                    <label><input type="checkbox" /> Levis</label>
                    <label><input type="checkbox" /> Urbanic</label>
                    <label><input type="checkbox" /> Zara</label>
                    <label><input type="checkbox" /> Roadster</label>
                    <label><input type="checkbox" /> Dolce & Gabbana</label>
                    <label><input type="checkbox" /> Tokyo Talkies</label>
                </div>

                <h4>Ratings</h4>
                <div className="price-filter">
                    <input type="range" className='slider' />
                </div>

                <h4>Sort By Price:</h4>
                <div className="price-filter">
                    <label><input type="radio" name="sort" /> High to Low</label>
                    <label><input type="radio" name="sort" /> Low to High</label>
                    <label><input type="radio" name="sort" /> Reset</label>
                </div>
            </div>
            
        </>
    )
}