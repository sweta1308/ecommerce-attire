// import { featuredData } from "./featuredData";
import { ProductCard } from "../product-card/productCard";
import "./featured.css";
import { useProducts } from "../../context/productContext";

export const Featured = () => {
  const {productState} = useProducts();
  const {productData} = productState;
  let featuredData = []
  if (productData.length > 0) {
    featuredData = [productData[22], productData[18], productData[5], productData[29], productData[19]]
  }
  return (
    <>
      <h2>Products You May Like ✨</h2>
      <div className="featured">
        {featuredData?.map((data) => {
          return (
            <div>
              <ProductCard data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};
