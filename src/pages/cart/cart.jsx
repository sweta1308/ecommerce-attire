import { useCart } from '../../context/cartContext';
import './cart.css';
import { CartCard } from './cartCard';
import EmptyCart from './emptyCart';
import PriceCard from './priceCard';

const Cart = () => {
    const {cart,  removeCartData} = useCart();
    let cartObject = {
        quantity: 0,
        totalPrice: 0,
        totalGivenPrice: 0,
        totalOriginalPrice: 0
    }

    const handleRemoveCart = (id) => removeCartData(id)

    return (
        <>
            <div className='cart'>
                <h1>Cart {cart.length > 0 && <span>({cart.length})</span>}</h1>
                {cart.length > 0 && <button className='clear-cart'>Clear Cart</button>}
                {cart.length > 0 ? <div>
                    <div className='cart-items'>
                        {cart.map(item => {
                            const { _id, price, originalPrice,  qty} = item;
                            cartObject = {
                                quantity: cartObject.quantity + Number(qty),
                                totalPrice: cartObject.totalPrice + Number(price) * Number(qty),
                                totalOriginalPrice: cartObject.totalOriginalPrice + Number(qty) * Number(originalPrice),
                            }
                            return (
                                <>
                                    <CartCard data={item} handleRemoveCart={() => handleRemoveCart(_id)} />
                                </>
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