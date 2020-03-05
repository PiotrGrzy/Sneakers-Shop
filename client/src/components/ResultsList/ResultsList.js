import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SneakerLI from '../SneakerLI/SneakerLI';
import { fetchSearchResults, setLoading } from '../../redux/shop/shop.actions';

import './results-list.scss';
import Spinner from '../spinner/Spinner';

const ResultsList = ({
  searchResults,
  fetchSearchResults,
  setLoading,
  isLoading
}) => {
  useEffect(() => {
    setLoading();
    fetchSearchResults();
  }, []);
  if (isLoading)
    return (
      <div className="results-list">
        <Spinner />
      </div>
    );

  return (
    <div className="results-list">
      {searchResults.map(item => (
        <SneakerLI key={item.id} sneaker={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.shop.searchResults,
    isLoading: state.shop.isLoading
  };
};

export default connect(mapStateToProps, { fetchSearchResults, setLoading })(
  ResultsList
);
