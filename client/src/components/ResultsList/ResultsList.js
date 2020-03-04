import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SneakerLI from '../SneakerLI/SneakerLI';
import { fetchSearchResults, setLoading } from '../../redux/shop/shop.actions';

import './results-list.scss';

const ResultsList = ({ searchResults, fetchSearchResults, setLoading }) => {
  useEffect(() => {
    setLoading();
    fetchSearchResults();
  }, []);
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
    searchResults: state.shop.searchResults
  };
};

export default connect(mapStateToProps, { fetchSearchResults, setLoading })(
  ResultsList
);
