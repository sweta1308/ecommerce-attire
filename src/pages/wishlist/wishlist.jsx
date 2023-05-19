import './wishlist.css';
import { useWishlist } from "../../context/wishlistContext";
import { EmptyWishlist } from "./emptyWishlist";
import { WishlistCard } from './wishlistCard';

export const Wishlist = () => {
    const {wishlist, removeWishlistData} = useWishlist();
    const handleRemoveWishlist = (id) => removeWishlistData(id)
    return (
        <>
            <div className="wishlist">
                <h1>Wishlist</h1>
                <div className='wishlist-items'>
                    {wishlist.length > 0 ? <div>
                        {wishlist.map(item => {
                            return (
                                <WishlistCard key={item._id} data={item} handleRemoveWishlist={() => handleRemoveWishlist(item._id)} />
                            )
                        })}
                    </div> : <EmptyWishlist />}
                </div>
            </div>
        </>
    )
}