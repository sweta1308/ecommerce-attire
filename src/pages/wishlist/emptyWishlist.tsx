import { useNavigate } from 'react-router';
import './wishlist.css';

export const EmptyWishlist = () => {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate('/products');
  };

  return (
    <div className="empty-wishlist">
      <h3>Nothing in wishlist.</h3>
      <p>Browse through products and add your favorites to wishlist.</p>
      <button onClick={handleBrowse}>Browse</button>
    </div>
  );
};
