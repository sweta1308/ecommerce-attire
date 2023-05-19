import './wishlist.css'

export const WishlistCard =({title, image, brand, price, originalPrice, ratings}) => {
    return (
        <>
            <div className="wishlist-card">
                <img alt={title} src={image} />
                <div className="wishlist-container">
                    <h3>{brand}</h3>
                    <p>{title}</p>
                    <p>{ratings.value} ⭐</p>
                    <div className="price">
                        <h3>{price}</h3>
                        <p>{originalPrice}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button>Add to Cart</button>
                    <button>Remove From Wishlist</button>
                </div>
            </div>
        </>
    )
}