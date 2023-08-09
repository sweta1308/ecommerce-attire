import { useNavigate } from "react-router";
import { logo } from "../../assets";
import "./footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-footer">
          <img src={logo} alt="" />
          <p>
            Specializes in providing high-quality, stylish productsfor your
            wardrobe
          </p>
        </div>
        <div className="contacts">
          <div className="companies">
            <h3>COMPANY</h3>
            <p onClick={() => navigate("/")}>About</p>
            <p onClick={() => navigate("/")}>Terms of Use</p>
            <p onClick={() => navigate("/")}>Policies</p>
          </div>

          <div className="socials">
            <h3>CONTACTS: </h3>
            <a
              href="https://github.com/sweta1308"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-lg"></i> Github
            </a>
            <a
              href="https://twitter.com/AgarwallaSweta"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-twitter fa-lg"></i> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/sweta-agarwalla-45aa2324a/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p>
        Copyright <i class="fa-regular fa-copyright"></i>2023 Attire. All rights
        reserved.
      </p>
    </footer>
  );
};
