import './wishlist.css';
import { useWishlist } from "../../context/wishlistContext";
import { EmptyWishlist } from "./emptyWishlist";

export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return (
        <>
            <div className="wishlist">
                <h1>Wishlist</h1>
                <div className='wishlist-items'>
                    {wishlist.length > 0 ? <div></div> : <EmptyWishlist />}
                </div>
            </div>
        </>
    )
}