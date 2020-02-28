import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Sneakers Shop</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">
              Shop
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">
              Cart
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/login">
              Login/Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
