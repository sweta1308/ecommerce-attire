import { useNavigate } from "react-router";
import "./productCard.css";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import { isItemInCart } from "../../utils/isItemPresentInCart";

export const ProductCard = ({ data }) => {
  const { _id, image, title, brand, price, originalPrice, ratings } = data;
  const navigate = useNavigate();
  const { cart, addCartData } = useCart();
  const { authState } = useAuth();

  return (
    <>
      <div className="product-card">
        <div onClick={() => navigate(`/products/${_id}`)}>
          <img src={image} alt={title} />
          <h3>{brand}</h3>
          <p className="product-title">
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </p>
          <div className="price-rating">
            <div className="price">
              <h3>₹{price}</h3>
              <p>₹{originalPrice}</p>
            </div>
            <p>{ratings?.value} ⭐</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (authState.isLoggedIn) {
              if (isItemInCart(cart, _id)) {
                navigate("/cart");
              } else {
                addCartData(data);
              }
            } else {
              alert("Please login to proceed");
            }
          }}
        >
          {isItemInCart(cart, _id) ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </>
  );
};
