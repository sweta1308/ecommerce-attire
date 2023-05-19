import './wishlist.css';
import { useWishlist } from "../../context/wishlistContext";
import { EmptyWishlist } from "./emptyWishlist";
import { WishlistCard } from './wishlistCard';

export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return (
        <>
            <div className="wishlist">
                <h1>Wishlist</h1>
                <div className='wishlist-items'>
                    {wishlist.length > 0 ? <div>
                        {wishlist.map(item => {
                            const {_id, brand, title, price, originalPrice, ratings, image} = item
                            return (
                                <WishlistCard key={_id} brand={brand} title={title} price={price} originalPrice={originalPrice} ratings={ratings} image={image} />
                            )
                        })}
                    </div> : <EmptyWishlist />}
                </div>
            </div>
        </>
    )
}