import { useNavigate } from "react-router";
import { useCart } from "../../context/cartContext";

const PriceCard = ({ obj }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <>
      <ul className="price-card">
        <li>
          <p>Subtotal ({cart.length})</p>
          <h4>Rs. {obj.totalOriginalPrice}</h4>
        </li>
        <li>
          <p>Discount</p>
          <h4>- Rs. {obj.totalOriginalPrice - obj.totalPrice}</h4>
        </li>
        <hr />
        <li>
          <p>Grand Total ({cart.length})</p>
          <h4>Rs. {obj.totalPrice}</h4>
        </li>
        <button onClick={() => navigate("/address")}>CheckOut Now</button>
      </ul>
    </>
  );
};
export default PriceCard;
