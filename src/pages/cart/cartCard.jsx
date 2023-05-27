import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { isItemInWishlist } from "../../utils/isItemPresentInWishlist";
import { toast } from "react-toastify";
import "./cart.css";

export const CartCard = ({ data, handleRemoveCart }) => {
  const { _id, image, brand, title, qty, price, originalPrice } = data;
  const { changeCartQuantity } = useCart();
  const { authState } = useAuth();
  const { wishlist, addWishlistData } = useWishlist();
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-card">
        <img src={image} alt={title} />
        <div className="title">
          <h3>{brand}</h3>
          <p>{title}</p>
        </div>

        <div className="cart-quantity">
          <div className="quantity-select">
            <i
              disabled={qty <= 1}
              onClick={() => changeCartQuantity(_id, "decrement")}
              class="fa-solid fa-minus fa-xs"
            ></i>
            {qty}
            <i
              class="fa-solid fa-plus fa-xs"
              onClick={() => changeCartQuantity(_id, "increment")}
            ></i>
          </div>
          <button onClick={() => handleRemoveCart(_id)}>
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
        <div className="cart-price">
          <h3>Rs.{price}</h3>
          <p>Rs. {originalPrice}</p>
          <button
            className="wishlist-btn"
            onClick={() => {
              if (authState.isLoggedIn) {
                if (isItemInWishlist(wishlist, _id)) {
                  navigate("/wishlist");
                } else {
                  addWishlistData(data);
                  toast.success("Added to wishlist!");
                }
              } else {
                toast.warning("Please login to proceed");
                navigate("/login");
              };
            }}
          >
            {isItemInWishlist(wishlist, _id)
              ? "Go to Wishlist"
              : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </>
  );
};
