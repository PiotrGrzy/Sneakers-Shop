import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCartView } from '../../redux/cart/cart.actions';

import Cart from '../../components/cart/Cart';

import './header.scss';

import Logo from '../../assets/logo.png';

const Header = ({ cartItems, toggleCartView }) => {
  const handleCartClick = () => {
    toggleCartView();
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={Logo} alt="Logo" className="header__logo-img" />
          Sneakers Shop
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">
              Shop
            </Link>
          </li>
          <li className="header__nav-item">
            <div className="header__nav-link" onClick={handleCartClick}>
              Cart{' '}
              {cartItems > 0 ? (
                <i className="lni lni-cart-full"></i>
              ) : (
                <i className="lni lni-cart"></i>
              )}
              <span className="header__cart-quantity">{cartItems}</span>
              <Cart />
            </div>
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

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items.length
  };
};

export default connect(mapStateToProps, { toggleCartView })(Header);
