import { useParams } from "react-router";
import './productDetails.css';
import { useEffect, useState } from "react";
import { Featured } from "../../components/featured/featured";
import { getProduct } from "../../utils/getProduct";
import Shimmer from "../../components/shimmer/shimmer";

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [singleProduct, setSingleProduct] = useState({})
    const {productID} = useParams();
    const getSingleProduct = async () => {
        try {
            const product = await getProduct(productID);
            console.log(product)
            setSingleProduct(product?.product)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])
    
    if (Object.keys(singleProduct).length === 0) {
        return <Shimmer />
    }

    const {image, title, brand, ratings, price, originalPrice, outOfStock} = singleProduct

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
                            <i disabled={quantity===1 ? true : false} onClick={() => setQuantity(quantity => quantity > 1 ? quantity - 1 : quantity)} class="fa-solid fa-minus fa-xs"></i>{quantity}<i onClick={() => setQuantity(quantity => quantity+1)} class="fa-solid fa-plus fa-xs"></i> 
                        </div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <hr className="mid-hr" />
            <div className="like-product">
                <Featured />
            </div>
            
        </>
    )
}