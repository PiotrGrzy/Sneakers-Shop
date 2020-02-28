import React, { useEffect } from 'react';

import ResultsList from '../../components/ResultsList/ResultsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingList from '../../components/TrendingList/TrendingList';
import { fetchTrendingNow } from '../../redux/shop/shop.actions';

const ShopPage = () => {
  useEffect(() => {
    fetchTrendingNow();
  });
  return (
    <div className="shop">
      <h1>Main ShopPage</h1>
      <ResultsList />
      <SearchBar />
      <TrendingList />
    </div>
  );
};

export default ShopPage;
