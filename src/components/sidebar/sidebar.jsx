import { useFilters } from "../../context/filterContext";
import { useProducts } from "../../context/productContext";
import "./sidebar.css";

export const SideBar = ({ isFilterVisible }) => {
  const { productState } = useProducts();
  const { filterDispatch, filterState } = useFilters();
  return (
    <>
      <div
        className="filters"
        style={{ display: isFilterVisible ? "block" : "" }}
      >
        <div className="filter">
          <h2>Filters</h2>
          <button
            onClick={() => {
              filterDispatch({ type: "clear_filters" });
            }}
          >
            Clear Filters
          </button>
        </div>

        <h4>Category</h4>
        <div className="category-filter">
          {productState?.categoriesData.map(({ categoryName }) => (
            <div key={categoryName}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.category.includes(categoryName)}
                  onChange={() =>
                    filterDispatch({
                      type: "filter_by_category",
                      payload: categoryName,
                    })
                  }
                />{" "}
                {categoryName}
              </label>
            </div>
          ))}
        </div>

        <h4>Brands</h4>
        <div className="brand-filter">
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("H&M")}
              onChange={() =>
                filterDispatch({ type: "filter_by_brands", payload: "H&M" })
              }
            />{" "}
            H&M
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Sassafras")}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_brands",
                  payload: "Sassafras",
                })
              }
            />{" "}
            Sassafras
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Levis")}
              onChange={() =>
                filterDispatch({ type: "filter_by_brands", payload: "Levis" })
              }
            />{" "}
            Levis
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Urbanic")}
              onChange={() =>
                filterDispatch({ type: "filter_by_brands", payload: "Urbanic" })
              }
            />{" "}
            Urbanic
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Zara")}
              onChange={() =>
                filterDispatch({ type: "filter_by_brands", payload: "Zara" })
              }
            />{" "}
            Zara
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Roadster")}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_brands",
                  payload: "Roadster",
                })
              }
            />{" "}
            Roadster
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Dolce & Gabbana")}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_brands",
                  payload: "Dolce & Gabbana",
                })
              }
            />{" "}
            Dolce & Gabbana
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Tokyo Talkies")}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_brands",
                  payload: "Tokyo Talkies",
                })
              }
            />{" "}
            Tokyo Talkies
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterState?.brands.includes("Indya")}
              onChange={() =>
                filterDispatch({ type: "filter_by_brands", payload: "Indya" })
              }
            />{" "}
            Indya
          </label>
        </div>

        <h4>Ratings</h4>
        <div className="price-filter">
          <input
            type="range"
            className="slider"
            min="0"
            max="5"
            value={filterState.rating}
            list="numbers"
            onChange={(e) =>
              filterDispatch({
                type: "filter_by_rating",
                payload: e.target.value,
              })
            }
          />
          <datalist id="numbers">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </datalist>
        </div>

        <h4>Sort By Price:</h4>
        <div className="price-filter">
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "featured"}
              onChange={() =>
                filterDispatch({ type: "filter_by_sort", payload: "featured" })
              }
            />{" "}
            Featured
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "high-to-low"}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_sort",
                  payload: "high-to-low",
                })
              }
            />{" "}
            High to Low
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "low-to-high"}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_sort",
                  payload: "low-to-high",
                })
              }
            />{" "}
            Low to High
          </label>
        </div>

        <h4>Availability</h4>
        <div className="stock-filter">
          <label>
            <input
              type="checkbox"
              checked={filterState.includeOutOfStock}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_availability",
                  payload: !filterState.includeOutOfStock,
                })
              }
            />{" "}
            Include Out of Stock
          </label>
        </div>
      </div>
    </>
  );
};
