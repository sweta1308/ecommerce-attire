import './product.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { ProductCard } from '../../components/product-card/productCard';
import { SideBar } from '../../components/sidebar/sidebar';
import { useFilters } from '../../context/filterContext';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/productContext';
import { useState } from 'react';

const Product = () => {
  const { filteredData }: any = useFilters();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { productState }: any = useProducts();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="product">
      <div className="text-filter">
        <p className="text">
          <span onClick={handleHomeClick}>Home</span>{' '}
          <i className="fa-solid fa-angle-right fa-xs"></i>{' '}
          <span onClick={handleProductsClick}>
            Browse Products ({filteredData.length})
          </span>
        </p>

        <button onClick={toggleFilterVisibility}>
          <i className="fa-solid fa-filter" style={{ color: '#e80071' }}></i>{' '}
          Filters
        </button>
      </div>

      <div className="products">
        <div className="sidebar">
          <SideBar isFilterVisible={isFilterVisible} />
        </div>
        {productState.isProductLoading ? (
          <div className="loader">
            <ClipLoader color={`var(--primary-color)`} size={120} />
          </div>
        ) : (
          <div className="product-list">
            {filteredData.length === 0 ? (
              <h2 style={{ textAlign: 'center' }}>No Products Found.</h2>
            ) : (
              filteredData.map((product: any) => (
                <li key={product._id}>
                  <ProductCard data={product} />
                </li>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
