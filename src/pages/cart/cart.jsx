import { useCart } from '../../context/cartContext';
import './cart.css';
import { CartCard } from './cartCard';
import EmptyCart from './emptyCart';
import PriceCard from './priceCard';

const Cart = () => {
    const {cart} = useCart();
    let cartObject = {
        quantity: 0,
        totalPrice: 0,
        totalGivenPrice: 0,
        totalOriginalPrice: 0
    }

    return (
        <>
            <div className='cart'>
                <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
                {cart.length > 0 ? <div>
                    <div>
                        {cart.map(item => {
                            const { title, brand, image, price, originalPrice,  qty} = item;
                            cartObject = {
                                quantity: cartObject.quantity + Number(qty),
                                totalGivenPrice: cartObject.totalPrice + Number(price),
                                totalOriginalPrice: cartObject.totalOriginalPrice + Number(originalPrice),
                                totalPrice: cartObject.totalPrice + Number(qty) * Number(price)
                            }
                            return (
                                <div className='active-cart'>
                                    <CartCard  title={title} image={image} brand={brand} price={price} quantity={qty} />
                                </div>
                            )
                        })}
                        <PriceCard obj={cartObject} />
                    </div>
                </div> : <EmptyCart />}
            </div>            
       </>
    )
}  

export default Cart;