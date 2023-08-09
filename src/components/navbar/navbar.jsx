import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logo } from "../../assets";
import "./navbar.css";
import { useAuth } from "../../context/authContext";
import { useFilters } from "../../context/filterContext";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";

export const NavBar = () => {
  const { token } = useAuth();
  const { filterState, filterDispatch } = useFilters();
  const [isVisible, setIsVisible] = useState(true);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    textDecoration: "none",
  });

  return (
    <>
      <div
        className="top-bar"
        style={{
          display: isVisible && token === "" ? "block" : "none",
        }}
      >
        Sign up and get exclusive offers.
        <i onClick={() => setIsVisible(false)} class="fa-solid fa-xmark"></i>
      </div>
      <div className="nav">
        <div className="navbar">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <div className="nav-options">
            <p>
              <NavLink style={activeStyle} to="/">
                HOME
              </NavLink>
            </p>
            <p>
              <NavLink style={activeStyle} to="/products">
                SHOP
              </NavLink>
            </p>
          </div>
          <div className="nav-navigate">
            <div onClick={() => navigate("/products")}>
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "#98999a" }}
              ></i>
              <input
                placeholder="Search"
                value={filterState.search}
                onChange={(e) => {
                  filterDispatch({
                    type: "filter_by_search",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <i
              onClick={() => navigate("/cart")}
              class="fa-solid fa-cart-shopping"
            ></i>
            {cart.length > 0 && <p className="badge">{token && cart.length}</p>}

            <i
              onClick={() => navigate("/wishlist")}
              class="fa-solid fa-heart"
            ></i>
            {wishlist.length > 0 && (
              <p className="badge">{token && wishlist.length}</p>
            )}

            {token ? (
              <button
                className="login-icon"
                onClick={() => navigate("/profile")}
              >
                <i class="fa-regular fa-user"></i>
              </button>
            ) : (
              <button className="login-icon" onClick={() => navigate("/login")}>
                <i class="fa-regular fa-user"></i>
              </button>
            )}
          </div>
        </div>

        <div className="search-bar" onClick={() => navigate("/products")}>
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ color: "#98999a" }}
          ></i>
          <input
            placeholder="Search"
            value={filterState.search}
            onChange={(e) => {
              filterDispatch({
                type: "filter_by_search",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
