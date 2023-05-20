import { useNavigate } from "react-router";
import { cartEmpty } from "../../assets";
import "./cart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-items">
      <img src={cartEmpty} alt="cart" />
      <h3>Your cart is empty!</h3>
      <p>
        Looks like you haven't added anything in your cart. Go ahead & explore
        top categories.
      </p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  );
};

export default EmptyCart;
