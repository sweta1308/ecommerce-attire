import './pageNotFound.css';
import React from 'react';
import { error404 } from '../../assets/';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
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

export default PageNotFound;
