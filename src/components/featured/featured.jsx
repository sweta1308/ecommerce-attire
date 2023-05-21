import { featuredData } from "./featuredData";
import { ProductCard } from "../product-card/productCard";
import "./featured.css";

export const Featured = () => {
  return (
    <>
      <h2>Products You May Like ✨</h2>
      <div className="featured">
        {featuredData.map((data) => {
          return (
            <div key={data._id}>
              <ProductCard data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};
