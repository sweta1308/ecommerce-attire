import { useNavigate } from "react-router";
import "./wishlist.css";

export const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="empty-wishlist">
        <h3>Nothing in wishlist.</h3>
        <p>Browse through products and add your favourites to wishlist.</p>
        <button onClick={() => navigate("/products")}>Browse</button>
      </div>
    </>
  );
};
