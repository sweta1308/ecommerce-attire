import './navbar.css';
import { logo } from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useCart } from '../../context/cartContext';
import { useFilters } from '../../context/filterContext';
import { useState } from 'react';
import { useWishlist } from '../../context/wishlistContext';

export const NavBar = () => {
  const { token }: any = useAuth();
  const { filterState, filterDispatch }: any = useFilters();
  const [isVisible, setIsVisible] = useState(true);
  const { cart } = useCart();
  const { wishlist }: any = useWishlist();
  const navigate = useNavigate();

  const activeStyle = (isActive: any) => ({
    color: isActive ? 'var(--primary-color)' : 'black',
    textDecoration: 'none',
  });

  const handleSearchChange = (e: any) => {
    filterDispatch({
      type: 'filter_by_search',
      payload: e.target.value,
    });
  };

  const renderTopBar = () => {
    if (isVisible && token === '') {
      return (
        <div className="top-bar">
          Sign up and get exclusive offers.
          <i
            onClick={() => setIsVisible(false)}
            className="fa-solid fa-xmark"
          ></i>
        </div>
      );
    }
    return null;
  };

  const renderNavOptions = () => {
    return (
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
    );
  };

  const renderNavNavigate = () => {
    return (
      <div className="nav-navigate">
        <div onClick={() => navigate('/products')}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: '#98999a' }}
          ></i>

          <input
            placeholder="Search"
            value={filterState.search}
            onChange={handleSearchChange}
          />
        </div>

        <i
          onClick={() => navigate('/cart')}
          className="fa-solid fa-cart-shopping"
        ></i>

        {cart.length > 0 && <p className="badge">{token && cart.length}</p>}

        <i
          onClick={() => navigate('/wishlist')}
          className="fa-solid fa-heart"
        ></i>
        {wishlist.length > 0 && (
          <p className="badge">{token && wishlist.length}</p>
        )}

        {token ? (
          <button className="login-icon" onClick={() => navigate('/profile')}>
            <i className="fa-regular fa-user"></i>
          </button>
        ) : (
          <button className="login-icon" onClick={() => navigate('/login')}>
            <i className="fa-regular fa-user"></i>
          </button>
        )}
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <div className="search-bar" onClick={() => navigate('/products')}>
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: '#98999a' }}
        ></i>

        <input
          placeholder="Search"
          value={filterState.search}
          onChange={handleSearchChange}
        />
      </div>
    );
  };

  return (
    <>
      {renderTopBar()}

      <div className="nav">
        <div className="navbar">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />

          {renderNavOptions()}

          {renderNavNavigate()}
        </div>

        {renderSearchBar()}
      </div>
    </>
  );
};
