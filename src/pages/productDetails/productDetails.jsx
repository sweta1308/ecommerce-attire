import { useParams } from "react-router"
import { useProducts } from "../../context/productContext";
import './productDetails.css';
import { useState } from "react";
import { Featured } from "../../components/featured/featured";

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {productID} = useParams();
    const {productData} = useProducts();
    const findProduct = productData.find(product => product._id === productID)
    const {image, title, brand, ratings, price, originalPrice, outOfStock} = findProduct
    return (
        <>
            <div className="product-details">
                <img src={image} alt={title} />
                <div className="product-detail">
                    <h1>{brand}</h1>
                    <p className="title-product">{title}</p>
                    <hr />
                    <p className="rating">{ratings.value}⭐ ({ratings.count} reviews)</p>
                    <div className="product-price">
                        <h2>₹{price}</h2>
                        <p>₹{originalPrice}</p>
                    </div>
                    <p className="stock"><strong>Availability: </strong>{outOfStock ? 'Not in Stock' : 'In Stock'}</p>
                    <div className="quantity-cart">
                        <div className="quantity">
                            <i onClick={() => setQuantity(quantity => quantity-1)} class="fa-solid fa-minus fa-xs"></i>{quantity}<i onClick={() => setQuantity(quantity => quantity+1)} class="fa-solid fa-plus fa-xs"></i>
                            
                        </div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <hr className="mid-hr" />
            <Featured />
        </>
    )
}