import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../components/brand/brand';
import { Featured } from '../../components/featured/featured';
import { Category } from '../../components/category/category';
import { header } from '../../assets';
import ClipLoader from 'react-spinners/ClipLoader';
import './home.css';
import { useProducts } from '../../context/productContext';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
  const { productState }: any = useProducts();

  return (
    <>
      <div className="hero">
        <img src={header} alt="" />
        <div className="header">
          <h1>Level up your style with our collections</h1>
          <p>
            <NavLink to="/products">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </p>
        </div>
      </div>

      <div className="content">
        <Brand />

        <div className="landing-caption">
          <h2>We provide the best customer experiences</h2>
          <hr />
          <p>We ensure our customers have the best shopping experience</p>
        </div>

        <div className="cards">
          <div className="card">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <h4>Original Products</h4>
            <p>
              We provide a money-back guarantee if the product is not original.
            </p>
          </div>

          <div className="card">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Exchange the product you have purchased if it doesn't fit you.
            </p>
          </div>

          <div className="card">
            <i className="fa-solid fa-cart-flatbed-suitcase"></i>
            <h4>New Arrivals Everyday</h4>
            <p>We update our collections almost every day.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-truck-fast"></i>
            <h4>Fast & Free Shipping</h4>
            <p>We offer fast and free shipping for our loyal customers.</p>
          </div>
        </div>

        {productState.isProductLoading ? (
          <ClipLoader color={`var(--primary-color)`} size={40} />
        ) : (
          <Featured />
        )}

        {productState?.isCategoryLoading ? (
          <ClipLoader color={`var(--primary-color)`} size={40} />
        ) : (
          <Category />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
