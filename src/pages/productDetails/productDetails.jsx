import { useNavigate, useParams } from "react-router";
import "./productDetails.css";
import { useEffect, useState } from "react";
import { getProduct } from "../../utils/getProduct";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { isItemInCart } from "../../utils/isItemPresentInCart";
import { isItemInWishlist } from "../../utils/isItemPresentInWishlist";
import { useWishlist } from "../../context/wishlistContext";
import { toast } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";
import { useProducts } from "../../context/productContext";

export const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productID } = useParams();
  const { token } = useAuth();
  const { cart, addCartData, isCartUpdate } = useCart();
  const { wishlist, addWishlistData, isWishlistUpdate } = useWishlist();
  const { productState, productDispatch } = useProducts();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      productDispatch({ type: "detail_loading", payload: true });
      const product = await getProduct(productID);
      setSingleProduct(product?.product);
      productDispatch({ type: "detail_loading", payload: false });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (Object.keys(singleProduct).length === 0) {
    return null;
  }

  const {
    _id,
    image,
    title,
    brand,
    ratings,
    price,
    originalPrice,
    outOfStock,
  } = singleProduct;

  return (
    <>
      <p className="text details">
        <p onClick={() => navigate("/")}>Home</p>{" "}
        <i class="fa-solid fa-angle-right fa-xs"></i>{" "}
        <p onClick={() => navigate("/products")}>Browse Products</p>
        <i class="fa-solid fa-angle-right fa-xs"></i>
        <span>Product Details</span>
      </p>
      {productState.isDetailLoading ? (
        <BarLoader color={`var(--primary-color)`} size={60} />
      ) : (
        <div className="product-details">
          <img src={image} alt={title} />
          <div className="product-detail">
            <h1>{brand}</h1>
            <p className="title-product">{title}</p>
            <hr />
            <p className="rating">
              {ratings.value}⭐ ({ratings.count} reviews)
            </p>
            <div className="product-price">
              <h2>₹{price}</h2>
              <p>₹{originalPrice}</p>
            </div>
            <p className="stock">
              <strong>Availability: </strong>
              {outOfStock ? "Not in Stock" : "In Stock"}
            </p>
            <div className="wishlist-cart">
              <button
                className="wishlist-btn"
                disabled={isWishlistUpdate}
                onClick={() => {
                  if (token) {
                    if (isItemInWishlist(wishlist, _id)) {
                      navigate("/wishlist");
                    } else {
                      addWishlistData(singleProduct);
                      toast.success("Added to wishlist!");
                    }
                  } else {
                    toast.warning("Please login to proceed");
                    navigate("/login");
                  }
                }}
              >
                {isItemInWishlist(wishlist, _id)
                  ? "Go to Wishlist"
                  : "Add to Wishlist"}
              </button>

              <button
                className="cart-btn"
                disabled={outOfStock || isCartUpdate}
                onClick={() => {
                  if (token) {
                    if (isItemInCart(cart, _id)) {
                      navigate("/cart");
                    } else {
                      addCartData(singleProduct);
                      toast.success("Added to cart!");
                    }
                  } else {
                    toast.warning("Please login to proceed");
                    navigate("/login");
                  }
                }}
              >
                <i class="fa-solid fa-cart-shopping"></i> {isItemInCart(cart, _id) ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}

      <hr className="mid-hr" />
    </>
  );
};
