import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ResultsList from '../../components/resultslist/ResultsList';
import SearchBar from '../../components/searchbar/SearchBar';
import TrendingList from '../../components/trendinglist/TrendingList';
import { fetchTrendingNow, setLoading } from '../../redux/shop/shop.actions';

import './shop.scss';

const ShopPage = ({ fetchTrendingNow, setLoading }) => {
  useEffect(() => {
    setLoading();
    fetchTrendingNow();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop">
      <SearchBar />
      <ResultsList />
      <TrendingList />
    </div>
  );
};

export default connect(null, { fetchTrendingNow, setLoading })(ShopPage);
