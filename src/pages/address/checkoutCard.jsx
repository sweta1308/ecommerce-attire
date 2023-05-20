import { useCart } from "../../context/cartContext";
import './address.css'

export const CheckoutCard = () => {
    const {cart} = useCart();
    return (
        <>
            <div className="checkout-details">
                <h4>Order Details</h4>
                <hr />
                <div className="flex-div">
                    <p><strong>Item</strong></p>
                    <p><strong>Quantity</strong></p>
                </div>
                {cart.map(data => {
                    const {_id, title, qty} = data
                    return (
                        <>
                            <div key={_id} className="flex-div">
                                <p className="title-cart">{title}</p>
                                <p>{qty}</p>
                            </div>
                        </>
                    )
                })}
                <hr />
                <h4>Deliver to</h4>
            </div>
            

        </>
    )
}