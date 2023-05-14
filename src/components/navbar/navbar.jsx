import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logo } from "../../assets";
import './navbar.css';

export const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const activeStyle = ({isActive}) => ({
        color: isActive ? 'var(--primary-color)' : 'black',
        textDecoration: 'none'
    })
    return (
        <>
            <div className="top-bar" style={{display: isVisible ? 'block' : 'none'}}>
                Sign up and get exclusive offers.
                <i onClick={() => setIsVisible(false)} class="fa-solid fa-xmark"></i>
            </div>
            <div className="nav">
                <div className="navbar">
                    <img src={logo} alt="logo" />
                    <div className="nav-options">
                        <p><NavLink style={activeStyle} to='/'>HOME</NavLink></p>
                        <p><NavLink style={activeStyle} to='/products'>SHOP</NavLink></p>
                    </div>
                    <div className="nav-navigate">
                        <div>
                            <i class="fa-solid fa-magnifying-glass" style={{color: '#98999a'}}></i>
                            <input placeholder="Search" />
                        </div>
                        <i onClick={() => navigate('/cart')} class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-regular fa-user"></i>
                    </div>
                </div>

                <div className="search-bar">
                    <i class="fa-solid fa-magnifying-glass" style={{color: '#98999a'}}></i>
                    <input placeholder="Search" />
                </div> 
            </div>
            
        </>
    )
}