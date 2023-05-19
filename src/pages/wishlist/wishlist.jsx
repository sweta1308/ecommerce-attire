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
                            return (
                                <WishlistCard key={item._id} data={item} />
                            )
                        })}
                    </div> : <EmptyWishlist />}
                </div>
            </div>
        </>
    )
}