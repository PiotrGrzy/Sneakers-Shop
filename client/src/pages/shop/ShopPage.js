import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ResultsList from '../../components/ResultsList/ResultsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingList from '../../components/TrendingList/TrendingList';
import {
  fetchTrendingNow,
  setLoading,
  fetchSearchResults,
} from '../../redux/shop/shop.actions';

import './shop.scss';

const ShopPage = ({
  fetchTrendingNow,
  setLoading,
  fetchSearchResults,
  searchQuery,
}) => {
  useEffect(() => {
    setLoading();
    fetchTrendingNow();
    setLoading();
    fetchSearchResults(searchQuery);

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

const mapStateToProps = (state) => {
  return {
    searchQuery: state.search,
  };
};

export default connect(mapStateToProps, {
  fetchTrendingNow,
  setLoading,
  fetchSearchResults,
})(ShopPage);
