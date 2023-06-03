import { Link } from "react-router-dom";
import { error404 } from "../../assets";
import './pageNotFound.css'

export const PageNotFound = () => {
  return (
    <main className="container-error-page">
      <img src={error404} alt="404 illustration" />
      <h2>Oops! The page you’re trying to reach doesn’t exist.</h2>
      <Link to="/" className="error-btn">
        Click here to go back home
      </Link>
    </main>
  );
};
