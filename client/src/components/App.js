import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../layouts/header/Header';

import ShopPage from '../pages/shop/ShopPage';
import Product from '../pages/product/Product';
import CheckOutPage from '../pages/checkout/CheckOutPage';

import './app.scss';
import SigninSignupPage from '../pages/sign-signup/SigninSignupPage';

function App() {
  useEffect(() => {
    // get list of trending products, login user if there is a valid token
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={ShopPage} />
      <Route exact path="/sneakers/:id" component={Product} />
      <Route exact path="/checkout" component={CheckOutPage} />
      <Route exact path="/login" component={SigninSignupPage} />
    </BrowserRouter>
  );
}

export default App;
