import { NavLink } from "react-router-dom";
import { Brand } from "../../components/brand/brand";
import { Featured } from "../../components/featured/featured";
import { Category } from "../../components/category/category";
import { header } from "../../assets";
import ClipLoader from "react-spinners/ClipLoader";
import "./home.css";
import { useProducts } from "../../context/productContext";
import { Footer } from "../../components/footer/footer";

export const Home = () => {
  const { productState } = useProducts();
  return (
    <>
      <div className="hero">
        <img src={header} alt="" />
        <div className="header">
          <h1>Level up your style with</h1>
          <h1> our collections</h1>
          <p>
            <NavLink to="/products">
              Shop Now <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </p>
        </div>
      </div>

      <div className="content">
        <Brand />

        <div className="landing-caption">
          <h2>We provide best customer experiences</h2>
          <hr />
          <p>We ensure our customers have the best shopping experience</p>
        </div>

        <div className="cards">
          <div className="card">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <h4>Original Products</h4>
            <p>
              We provide money back guarantee if the product is not original.
            </p>
          </div>
          <div className="card">
            <i class="fa-solid fa-hand-holding-heart"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Exchange the product you have purchased if it doesn't fit on you.
            </p>
          </div>
          <div className="card">
            <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            <h4>New Arrival Everyday</h4>
            <p>We update our collections almost everyday.</p>
          </div>
          <div className="card">
            <i class="fa-solid fa-truck-fast"></i>
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
