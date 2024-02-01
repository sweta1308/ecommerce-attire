import './wishlist.css';
import { EmptyWishlist } from './emptyWishlist';
import { toast } from 'react-toastify';
import { useWishlist } from '../../context/wishlistContext';
import { WishlistCard } from './wishlistCard';

const Wishlist = () => {
  const { wishlist, removeWishlistData }: any = useWishlist();

  const handleRemoveWishlist = (id: number) => {
    removeWishlistData(id);
    toast.error('Item removed from wishlist!');
  };

  const renderWishlistItems = () => {
    if (wishlist.length > 0) {
      return wishlist.map((item: any) => (
        <WishlistCard
          key={item._id}
          data={item}
          handleRemoveWishlist={() => handleRemoveWishlist(item._id)}
        />
      ));
    } else {
      return <EmptyWishlist />;
    }
  };

  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      <div className="wishlist-items">{renderWishlistItems()}</div>
    </div>
  );
};

export default Wishlist;
