import { useNavigate } from 'react-router'
import './productCard.css'

export const ProductCard = ({_id, image, title, brand, price, originalPrice, ratings}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="product-card">
                <div onClick={() => navigate(`/products/${_id}`)}>
                    <img src={image} alt={title} />
                    <h3>{brand}</h3>
                    <p className='product-title'>{title.length > 50 ? title.substring(0, 50)+'...' : title}</p>
                    <div className="price-rating">
                        <div className="price">
                            <h3>₹{price}</h3>
                            <p>₹{originalPrice}</p>
                        </div>
                        <p>{ratings?.value} ⭐</p>
                    </div>
                </div>
                
                <button>Add to Cart</button>
            </div>
            
        </>
    )
}