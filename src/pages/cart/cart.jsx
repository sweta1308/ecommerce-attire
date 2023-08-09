import { toast } from "react-toastify";
import "./cart.css";
import { CartCard } from "./cartCard";
import EmptyCart from "./emptyCart";
import PriceCard from "./priceCard";
import { useCart } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeCartData, priceDetails } = useCart();
  const handleRemoveCart = (id) => {
    removeCartData(id);
    toast.warning("Item removed from cart!");
  };

  return (
    <>
      <div className="cart">
        <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
        {cart.length > 0 && (
          <button
            className="clear-cart"
            onClick={() => {
              cart.map((item) => removeCartData(item._id));
              toast.error("Item removed from Cart!");
            }}
          >
            Clear Cart
          </button>
        )}
        {cart.length > 0 ? (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item) => {
                return (
                  <>
                    <CartCard
                      data={item}
                      handleRemoveCart={() => handleRemoveCart(item._id)}
                    />
                  </>
                );
              })}
            </div>
            <PriceCard obj={priceDetails} />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
