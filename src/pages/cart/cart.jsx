import {useNavigate} from 'react-router-dom';
import { cartEmpty } from '../../assets';
import './cart.css';

export const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="cart">
                <h1>Cart</h1>
                <div className='cart-items'>
                    <img src={cartEmpty} alt='cart' />
                    <h3>Your cart is empty!</h3>
                    <p>Looks like you haven't added anything in your cart. Go ahead & explore top categories.</p>
                    <button onClick={()=> navigate('/products')}>Shop Now</button>
                </div>
            </div>
        </>
    )
}