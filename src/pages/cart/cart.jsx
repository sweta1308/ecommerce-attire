import { useCart } from '../../context/cartContext';
import './cart.css';
import { CartCard } from './cartCard';
import EmptyCart from './emptyCart';

const Cart = () => {
    const {cart} = useCart();
    let cartObject = {
        quantity: 0,
        totalPrice: 0,
        totalOriginalPrice: 0
    }

    return (
        <>
            <div className='cart'>
                <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
                {cart.length > 0 ? <div>
                    <div>
                        {cart.map(item => {
                            const { price, originalPrice,  qty} = item;
                            cartObject = {
                                quantity: cartObject.quantity + Number(qty),
                                totalPrice: cartObject.totalPrice + Number(price),
                                totalOriginalPrice: cartObject.totalOriginalPrice + Number(originalPrice)
                            }
                            return <CartCard />
                        })}
                    </div>
                </div> : <EmptyCart />}
            </div>            
       </>
    )
}  

export default Cart;