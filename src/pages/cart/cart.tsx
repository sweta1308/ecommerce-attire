import { toast } from 'react-toastify';
import { CartCard } from './cartCard';
import EmptyCart from './emptyCart';
import PriceCard from './priceCard';
import { useCart } from '../../context/cartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeCartData, priceDetails }: any = useCart();

  const handleRemoveCart = (id: any) => {
    removeCartData(id);
    toast.warning('Item removed from cart!');
  };

  return (
    <div className="cart">
      <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
      {cart.length > 0 && (
        <button
          className="clear-cart"
          onClick={() => {
            cart.map((item: any) => removeCartData(item._id));
            toast.error('Item removed from Cart!');
          }}
        >
          Clear Cart
        </button>
      )}
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item: any) => (
              <CartCard
                key={item._id}
                data={item}
                handleRemoveCart={() => handleRemoveCart(item._id)}
              />
            ))}
          </div>
          <PriceCard obj={priceDetails} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
