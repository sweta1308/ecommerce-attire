import { useNavigate } from "react-router";
import { useAddress } from "../../context/addressContext";
import { useCart } from "../../context/cartContext";
import "./address.css";
import {toast} from 'react-toastify';

export const CheckoutCard = () => {
  const { cart, removeCartData } = useCart();
  let { cartObject } = useCart();
  const { checkout } = useAddress();
  const navigate = useNavigate();

  return (
    <>
      <div className="checkout-details">
        <h4>Order Details</h4>
        <hr />
        <div className="flex-div">
          <p>
            <strong>Item</strong>
          </p>
          <p>
            <strong>Quantity</strong>
          </p>
        </div>
        {cart.map((data) => {
          const { _id, title, qty } = data;
          return (
            <>
              <div key={_id} className="flex-div">
                <p className="title-cart">{title}</p>
                <p>{qty}</p>
              </div>
            </>
          );
        })}
        <hr />
        <h4>Price Details</h4>
        <hr />
        {cart.map((item) => {
          const { _id, price, originalPrice, qty } = item;
          cartObject = {
            quantity: cartObject.quantity + Number(qty),
            totalPrice: cartObject.totalPrice + Number(price) * Number(qty),
            totalOriginalPrice:
              cartObject.totalOriginalPrice +
              Number(qty) * Number(originalPrice),
          };
          return (
            <>
              <div key={_id}>
                <ul className="checkout-price">
                  <li>
                    <p>Subtotal</p>
                    <h4>Rs. {cartObject.totalOriginalPrice}</h4>
                  </li>
                  <li>
                    <p>Discount</p>
                    <h4>
                      - Rs.{" "}
                      {cartObject.totalOriginalPrice - cartObject.totalPrice}
                    </h4>
                  </li>
                  <hr />
                  <li>
                    <p>Grand Total</p>
                    <h4>Rs. {cartObject.totalPrice}</h4>
                  </li>
                </ul>
              </div>
            </>
          );
        })}
        <hr />
        <h4>Deliver to</h4>
        <hr />
        {Object.values(checkout)[0].length > 0 && (
          <div>
            <p>
              <strong>{checkout.name}</strong>
            </p>
            <div className="checkout-address">
              <p>{checkout.street}</p>
              <p>
                {checkout.city}, {checkout.state}
              </p>
              <p>Pincode: {checkout.pincode}</p>
            </div>
          </div>
        )}

        <button disabled={Object.values(checkout)[0].length === 0 || cart.length === 0} onClick={() => {
          navigate('/orderSummary');
          cart.map(item => removeCartData(item._id));
          toast.success("Order Placed!")
        }}>Place Order</button>
      </div>
    </>
  );
};
