import './orderSummary.css'

export const OrderSummary = () => {
    return (
        <>
            <div className="order-summary">
                <i class="fa-regular fa-circle-check fa-2xl" style={{color: "#24e916"}}></i>
                <h2>Thanks for your order!</h2>
                <small>The order confirmation has been sent to the respective company.</small>
                <div>
                    <h3>Shipping Method</h3>
                    <p>Expected delivery (3-5 business days)</p>
                </div>
            </div>
        </>
        
        
    )
}