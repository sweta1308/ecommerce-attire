import './productCard.css'

export const ProductCard = ({image, title, brand, price, originalPrice, ratings}) => {
    return (
        <>
            <div className="product-card">
                {/* <img src={data.image} alt={data.title} />
                <div className="first-line">
                    <h3>{data.brand}</h3>
                    <h3>₹{data.price}</h3>
                </div>
                <p>{data.title}</p>
                <div className="second-line">
                    <p>{data.ratings.value} ⭐</p>
                    <p>₹{data.originalPrice}</p>
                </div>  */}
                <img src={image} alt={title} />
                <h3>{brand}</h3>
                <p className='product-title'>{title}</p>
                <div className="price-rating">
                    <div className="price">
                        <h3>₹{price}</h3>
                        <p>₹{originalPrice}</p>
                    </div>
                    <p>{ratings?.value} ⭐</p>
                </div>
                
            </div>
            
        </>
    )
}