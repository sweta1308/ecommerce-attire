const PriceCard = ({ obj }) => {
  return (
    <>
      <ul className="price-card">
        <li>
          <p>Subtotal</p>
          <h4>Rs. {obj.totalOriginalPrice}</h4>
        </li>
        <li>
          <p>Discount</p>
          <h4>- Rs. {obj.totalOriginalPrice - obj.totalPrice}</h4>
        </li>
        <hr />
        <li>
          <p>Grand Total</p>
          <h4>Rs. {obj.totalPrice}</h4>
        </li>
        <button>CheckOut Now</button>
      </ul>
    </>
  );
};
export default PriceCard;
