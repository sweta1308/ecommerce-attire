import { ProductCard } from "../../components/product-card/productCard";
import { SideBar } from "../../components/sidebar/sidebar";
import "./product.css";
import { useState } from "react";
import { useFilters } from "../../context/filterContext";
import { useNavigate } from "react-router";

export const Product = () => {
  const { filteredData } = useFilters();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="product">
        <div className="text-filter">
          <p className="text">
            <p onClick={() => navigate('/')}>Home</p> <i class="fa-solid fa-angle-right fa-xs"></i>{" "}
            <span onClick={() => navigate('/products')}>Browse Products</span>
          </p>
          <button onClick={() => setIsFilterVisible((prev) => !prev)}>
            <i class="fa-solid fa-filter" style={{ color: "#e80071" }}></i>{" "}
            Filters
          </button>
        </div>

        <div className="products">
          <div className="sidebar">
            <SideBar isFilterVisible={isFilterVisible} />
          </div>
          <div className="product-list">
            {filteredData.map((product) => {
              return (
                <li key={product._id}>
                  <ProductCard data={product} />
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
