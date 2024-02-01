import { useNavigate } from 'react-router';

interface PriceCardProps {
  obj: {
    quantity: number;
    totalOriginalPrice: number;
    totalPrice: number;
  };
}

const PriceCard: React.FC<PriceCardProps> = ({ obj }) => {
  const navigate = useNavigate();

  return (
    <div className="price-card">
      <ul>
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
      </ul>
      <button onClick={() => navigate('/address')}>CheckOut Now</button>
    </div>
  );
};

export default PriceCard;
