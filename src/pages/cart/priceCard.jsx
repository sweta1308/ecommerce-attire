import { useNavigate } from "react-router";

const PriceCard = ({ obj }) => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="price-card">
        <li>
          <p>Subtotal ({obj.quantity})</p>
          <h4>Rs. {obj.totalOriginalPrice}</h4>
        </li>
        <li>
          <p>Discount</p>
          <h4>- Rs. {obj.totalOriginalPrice - obj.totalPrice}</h4>
        </li>
        <hr />
        <li>
          <p>Grand Total ({obj.quantity})</p>
          <h4>Rs. {obj.totalPrice}</h4>
        </li>
        <button onClick={() => navigate("/address")}>CheckOut Now</button>
      </ul>
    </>
  );
};
export default PriceCard;
