import { useNavigate } from "react-router";
import { useAddress } from "../../context/addressContext";
import { useCart } from "../../context/cartContext";
import "./address.css";
import { toast } from "react-toastify";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const CheckoutCard = () => {
  const { cart, removeCartData, priceDetails } = useCart();
  const { checkout } = useAddress();
  const navigate = useNavigate();

  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_4hPkeR34PzPm3M",
      amount: Number(priceDetails.totalPrice) * 100,
      currency: "INR",
      name: "ATTIRE",
      description: "Thank you for shopping with us",
      handler: function () {
        toast.success(`Payment of Rs. ${priceDetails.totalPrice} is Succesful`);
        navigate("/order-summary");
        cart.map((item) => removeCartData(item._id));
        setTimeout(() => {
          console.log("Success")
          navigate("/");
        }, 4000);
      },
      theme: {
        color: "#e80071",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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
        <div className="flex-div">
          <h4>Price Details</h4>
          <p>{priceDetails.quantity}</p>
        </div>
        <hr />
        <ul className="checkout-price">
          <li>
            <p>Subtotal</p>
            <h4>Rs. {priceDetails.totalOriginalPrice}</h4>
          </li>
          <li>
            <p>Discount</p>
            <h4>
              - Rs. {priceDetails.totalOriginalPrice - priceDetails.totalPrice}
            </h4>
          </li>
          <hr />
          <li>
            <p>Grand Total</p>
            <h4>Rs. {priceDetails.totalPrice}</h4>
          </li>
        </ul>
        <hr />
        <h4>Deliver to</h4>
        <hr />
        {Object.values(checkout)[0].length > 0 ? (
          <div className="final-address">
            <p>
              <strong>{checkout.name}</strong>
            </p>
            <div className="checkout-address">
              <p>{checkout.street}</p>
              <p>
                {checkout.city}, {checkout.state}
              </p>
              <p>{checkout.pincode}</p>
            </div>
          </div>
        ) : <p>No Address Found</p>}

        <button
          disabled={
            Object.values(checkout)[0].length === 0 || cart.length === 0
          }
          onClick={() => {
            displayRazorpay();
          }}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
