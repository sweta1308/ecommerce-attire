import './footer.css';
import { logo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer>
      <div className="footer-div">
        <div className="logo-footer">
          <img src={logo} alt="" />
          <p>
            Specializes in providing high-quality, stylish products for your
            wardrobe
          </p>
        </div>

        <div className="contacts">
          <div className="companies">
            <h3>COMPANY</h3>
            <p onClick={() => handleNavigation('/')}>About</p>
            <p onClick={() => handleNavigation('/')}>Terms of Use</p>
            <p onClick={() => handleNavigation('/')}>Policies</p>
          </div>

          <div className="socials">
            <h3>CONTACTS: </h3>
            <a
              href="https://github.com/sweta1308"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-lg"></i> Github
            </a>
            <a
              href="https://twitter.com/AgarwallaSweta"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter fa-lg"></i> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/sweta-agarwalla-45aa2324a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <hr />

      <p>&copy; {new Date().getFullYear()} Attire. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
