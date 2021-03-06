import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../layouts/header/Header';
import ShopPage from '../pages/shop/ShopPage';
import Product from '../pages/product/Product';
import CheckOutPage from '../pages/checkout/CheckOutPage';
import Order from '../pages/order/Order';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import SigninSignupPage from '../pages/sign-signup/SigninSignupPage';
import Footer from '../layouts/footer/Footer';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ShopPage} />
      <Route exact path="/sneakers/:id" component={Product} />
      <Route exact path="/checkout" component={CheckOutPage} />
      <ProtectedRoute path="/order" component={Order} />
      <Route exact path="/login" component={SigninSignupPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
