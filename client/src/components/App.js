import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../layouts/header/Header';

import ShopPage from '../pages/shop/ShopPage';

import './app.scss';

function App() {
  useEffect(() => {
    // get list of trending products, login user if there is a valid token
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={ShopPage} />
    </BrowserRouter>
  );
}

export default App;
