import { NavLink } from "react-router-dom";
import { Brand } from "../../components/brand/brand";
import { Featured } from "../../components/featured/featured";
import { Category } from "../../components/category/category";
import { header } from "../../assets";
import './home.css';

export const Home = () => {

    return (
        <>
            <div className="hero">
                <img src={header} alt="" />
                <div className="header">
                    <h1>Level up your style with</h1>
                    <h1> our collections</h1>
                    <p><NavLink to='/products'>Shop Now <i class="fa-solid fa-arrow-right"></i></NavLink></p>
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
                        <p>We provide money back guarantee if the product is not original.</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                        <h4>Satisfaction Guarantee</h4>
                        <p>Exchange the product you have purchased if it doesn't fit on you.</p>
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

                <Category />
                <Featured />

            </div>

            <footer>
                <div className="footer-div">
                    <h4>CONTACTS: </h4>
                    <a href="https://github.com/sweta1308"><i class="fa-brands fa-github fa-lg"></i></a>
                    <a href="https://twitter.com/AgarwallaSweta"><i class="fa-brands fa-twitter fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/sweta-agarwalla-45aa2324a/"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                </div>
                <hr />
                <p>Copyright <i class="fa-regular fa-copyright"></i>2023 Attire. All rights reserved.</p>
            </footer>
        </>
    )
}