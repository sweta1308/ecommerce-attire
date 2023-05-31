import { featuredData } from "./featuredData";
import { ProductCard } from "../product-card/productCard";
import "./featured.css";
import { useNavigate } from "react-router";

export const Featured = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Products You May Like ✨</h2>
      <div className="featured">
        {featuredData.map((data) => {
          return (
            <div key={data._id} onClick={() => navigate('/products')}>
              <ProductCard data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};
