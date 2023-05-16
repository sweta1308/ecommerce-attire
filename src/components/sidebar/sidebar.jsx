import './sidebar.css'

export const SideBar = ({isFilterVisible}) => {
    return (
        <>
            <div className="filters" style={{display: isFilterVisible ? 'block' : 'none'}}>
                <div className='filter'>
                    <h2>Filters</h2>
                    <button>Clear Filters</button>
                </div>

                <h4>Price</h4>
                <div className="rating-filter">
                    <input type="range" className='slider' />
                </div>

                <h4>Category</h4>
                <div className="category-filter">
                    <label><input type="checkbox" /> Tops</label>
                    <label><input type="checkbox" /> Bottomwear</label>
                    <label><input type="checkbox" /> Dresses</label>
                    <label><input type="checkbox" /> Ethnic</label>
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
                    {/* <label><input type="radio" name="rating" /> 4⭐ and above</label>
                    <label><input type="radio" name="rating" /> 3⭐ and above</label>
                    <label><input type="radio" name="rating" /> 2⭐ and above</label>
                    <label><input type="radio" name="rating" /> 1⭐ and above</label> */}
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