import './cart.css'

export const CartCard = ({data, handleRemoveCart}) => {
    const {_id, image, brand, title, qty, price, originalPrice} = data
    return (
        <>
            <div className='cart-card'>
                <img src={image} alt={title} />
                <div className="title">
                    <h3>{brand}</h3>
                    <p>{title}</p>
                </div>
                <div className="cart-quantity">
                    <div className="quantity-select">
                        <i disabled={qty===1 ? true : false} class="fa-solid fa-minus fa-xs"></i>{qty}<i class="fa-solid fa-plus fa-xs"></i> 
                    </div>
                    <button onClick={() => handleRemoveCart(_id)}><i class="fa-solid fa-trash-can"></i> Remove</button>
                </div>
                <div className='cart-price'>
                    <h3>Rs.{price}</h3>
                    <p>Rs. {originalPrice}</p>
                </div>
            </div>
        </>
    )
}