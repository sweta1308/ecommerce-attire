import { useNavigate } from "react-router";
import './wishlist.css';

export const Wishlist = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="wishlist">
                <h1>Wishlist</h1>
                <div className='wishlist-items'>
                    <h3>Nothing in wishlist.</h3>
                    <p>Browse through products and add your favourites to wishlist.</p>
                    <button onClick={()=> navigate('/products')}>Browse</button>
                </div>
            </div>
        </>
    )
}