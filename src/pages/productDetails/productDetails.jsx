import { useNavigate, useParams } from "react-router";
import './productDetails.css';
import { useEffect, useState } from "react";
import { Featured } from "../../components/featured/featured";
import { GetProduct } from "../../utils/getProduct";
import Shimmer from "../../components/shimmer/shimmer";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { isItemInCart } from "../../utils/isItemPresentInCart";

export const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const {productID} = useParams();
    const {authState} = useAuth();
    const {cart, addCartData} = useCart();
    const navigate = useNavigate();
    const getSingleProduct = async () => {
        try {
            const product = await GetProduct(productID);
            console.log(product)
            setSingleProduct(product?.product)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getSingleProduct()
    })
    
    if (Object.keys(singleProduct).length === 0) {
        return <Shimmer />
    }

    const {_id, image, title, brand, ratings, price, originalPrice, outOfStock} = singleProduct

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
                    <div className="wishlist-cart">
                        <button className="wishlist-btn">Add to Wishlist</button>
                        <button className="cart-btn" onClick={() => {
                    if (authState.isLoggedIn) {
                        if (isItemInCart(cart, _id)) {
                            navigate('/cart')
                        } else {
                            addCartData(singleProduct)
                        }
                    } else {
                        alert('Please login to proceed')
                    }
                }}>{isItemInCart(cart, _id) ? "Go to Cart" : "Add to Cart"}</button>
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