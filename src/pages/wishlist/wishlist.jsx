import "./wishlist.css";
import { useWishlist } from "../../context/wishlistContext";
import { EmptyWishlist } from "./emptyWishlist";
import { WishlistCard } from "./wishlistCard";
import {toast} from 'react-toastify'

export const Wishlist = () => {
  const { wishlist, removeWishlistData } = useWishlist();
  const handleRemoveWishlist = (id) => {
    removeWishlistData(id)
    toast.error("Item removed from wishlist!")
  };
  return (
    <>
      <div className="wishlist">
        <h1>Wishlist</h1>
        <div className="wishlist-items">
          {wishlist.length > 0 ? (
            <div>
              {wishlist.map((item) => {
                return (
                  <WishlistCard
                    key={item._id}
                    data={item}
                    handleRemoveWishlist={() => handleRemoveWishlist(item._id)}
                  />
                );
              })}
            </div>
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </div>
    </>
  );
};
