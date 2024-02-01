import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import { isItemInCart } from '../../utils/isItemPresentInCart';
import './wishlist.css';
import { useCart } from '../../context/cartContext';
import { toast } from 'react-toastify';
import { useWishlist } from '../../context/wishlistContext';

interface WishlistCardProps {
  data: {
    _id: string;
    title: string;
    image: string;
    brand: string;
    price: number;
    originalPrice: number;
    qty: number;
    ratings: {
      value: number;
      count: number;
    };
    outOfStock: boolean;
  };
  handleRemoveWishlist: (id: string) => void;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({
  data,
  handleRemoveWishlist,
}) => {
  const { token }: any = useAuth();
  const navigate = useNavigate();
  const { cart, addCartData, isCartUpdate } = useCart();
  const { isWishlistUpdate }: any = useWishlist();

  const {
    _id,
    title,
    image,
    brand,
    price,
    originalPrice,
    ratings,
    outOfStock,
  } = data;

  const handleAddToCart = () => {
    if (token) {
      if (isItemInCart(cart, _id)) {
        navigate('/cart');
      } else {
        addCartData(data);
        toast.success('Added to cart!');
      }
    } else {
      toast.warning('Please login to proceed!');
    }
  };

  return (
    <div className="wishlist-card">
      <img
        alt={title}
        src={image}
        onClick={() => navigate(`/products/${_id}`)}
      />
      <div className="wishlist-container">
        <h3>{brand}</h3>
        <p>{title}</p>
        <p>
          {ratings.value} ⭐ ({ratings.count})
        </p>
        <div className="price">
          <h3>{price}</h3>
          <p>{originalPrice}</p>
        </div>
      </div>
      <div className="buttons">
        <button disabled={outOfStock || isCartUpdate} onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-shopping"></i>{' '}
          {isItemInCart(cart, _id) ? 'Go to Cart' : 'Add to Cart'}
        </button>
        <button
          disabled={isWishlistUpdate}
          onClick={() => handleRemoveWishlist(_id)}
        >
          Remove From Wishlist
        </button>
      </div>
    </div>
  );
};
