import './cart.css'

export const CartCard = ({image, brand, title, quantity, price}) => {
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
                        <i disabled={quantity===1 ? true : false} class="fa-solid fa-minus fa-xs"></i>{quantity}<i class="fa-solid fa-plus fa-xs"></i> 
                    </div>
                    <button><i class="fa-solid fa-trash-can"></i> Remove</button>
                </div>
                <div className='cart-price'><h3>Rs.{price}</h3></div>
            </div>
        </>
    )
}