import { useCart } from '../../context/cartContext';
import './cart.css';
import { EmptyCart } from './emptyCart';

export const Cart = () => {
    const {cart} = useCart();
    return (
        <>
            <div className="cart">
                <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
                {cart.length > 0 ? <div></div> : <EmptyCart />}
            </div>
        </>
    )
}