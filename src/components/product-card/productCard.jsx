import { top1 } from "../../assets";
import './productCard.css'

export const ProductCard = () => {
    const data = 	{
		_id: 1,
		title: 'High Necked Crop Top',
		image: top1,
		brand: "Zara",
		price: "499",
		originalPrice: "999",
		ratings: {
			value: "4.5",
			count: "2k"
		},
		categoryName: "Tops",
		outOfStock: false,
		quantity: 0
	}
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
                <img src={data.image} alt={data.title} />
                <h3>{data.brand}</h3>
                <p>{data.title}</p>
                <div className="price-rating">
                    <div className="price">
                        <h3>₹{data.price}</h3>
                        <p>₹{data.originalPrice}</p>
                    </div>
                    <p>{data.ratings.value} ⭐</p>
                </div>
                
            </div>
            
        </>
    )
}