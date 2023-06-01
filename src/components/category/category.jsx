import "./category.css";
import { useProducts } from "../../context/productContext";
import { useFilters } from "../../context/filterContext";
import { useNavigate } from "react-router";

export const Category = () => {
  const { productState } = useProducts();
  const { filterDispatch } = useFilters();
  const navigate = useNavigate();
  return (
    <>
      <h2>Currated Picks ✨</h2>
      <div className="category">
        {productState?.categoriesData.length !== 0 &&
          productState?.categoriesData?.map((category) => (
            <div
              onClick={() => {
                filterDispatch({ type: "clear_filters" });
                filterDispatch({
                  type: "filter_by_category",
                  payload: category.categoryName,
                });
                navigate("/products");
              }}
            >
              <img src={category.image} alt={category.categoryName} />
              <p>
                {category.categoryName} <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          ))}
      </div>
    </>
  );
};
