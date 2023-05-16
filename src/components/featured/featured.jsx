import { featuredData } from "./featuredData";
import { ProductCard } from "../product-card/productCard";
import './featured.css'

export const Featured = () => {
    return (
        <>
            <h2>Products You May Like ✨</h2>
            <h2>Products You May Like ✨</h2>
=======
            <h2>Featured Products ✨</h2>
            <div className="featured">
                {featuredData.map(data => {
                    const {_id, title, brand, price, originalPrice, ratings, image} = data;
                    return (
                    <div key={_id}>
                        <ProductCard title={title} brand={brand} price={price} originalPrice={originalPrice} image={image} ratings={ratings} />
                    </div>
                )})}
            </div>
        </>
    )
}