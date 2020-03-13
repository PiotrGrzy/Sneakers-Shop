import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SneakerLI from '../SneakerLI/SneakerLI';
import { fetchSearchResults, setLoading } from '../../redux/shop/shop.actions';

import './results-list.scss';
import Spinner from '../spinner/Spinner';
import filterCategories from './filterCategories';

const ResultsList = ({
  searchQuery,
  searchResults,
  fetchSearchResults,
  setLoading,
  isLoading
}) => {
  useEffect(() => {
    setLoading();
    fetchSearchResults(searchQuery);
  }, []);

  if (isLoading)
    return (
      <div className="results-list">
        <Spinner />
      </div>
    );

  return (
    <div className="results-list">
      {searchResults.length < 1 ? (
        <p className="results-list__noresults">
          No results with given criteria
        </p>
      ) : (
        filterCategories(searchResults, searchQuery.category).map(item => (
          <SneakerLI key={item.id} sneaker={item} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.shop.searchResults,
    searchQuery: state.search,
    isLoading: state.shop.isLoading
  };
};

export default connect(mapStateToProps, { fetchSearchResults, setLoading })(
  ResultsList
);
