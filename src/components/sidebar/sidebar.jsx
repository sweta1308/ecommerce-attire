import './sidebar.css'

export const SideBar = () => {
    return (
        <>
            <div className="filters">
                <h4>Rating</h4>
                <div className="rating-filter">
                    <input type="range" />
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
                    <label><input type="checkbox" /> Louis Vitton</label>
                    <label><input type="checkbox" /> Levis</label>
                    <label><input type="checkbox" /> Prada</label>
                    <label><input type="checkbox" /> Zara</label>
                    <label><input type="checkbox" /> Gucci</label>
                    <label><input type="checkbox" /> Dolce & Gabbana</label>
                    <label><input type="checkbox" /> Calvin Klein</label>
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