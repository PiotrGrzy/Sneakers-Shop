import React from 'react';
import { connect } from 'react-redux';
import { selectTrendingNowItems } from '../../redux/shop/shop.selectors';
import SneakerLI from '../SneakerLI/SneakerLI';
import Spinner from '../spinner/Spinner';

import './trending-list.scss';

const TrendingList = ({ isLoading, trendingItems }) => {
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <h2 className="trending-list__header">Trending Now:</h2>
      <div className="trending-list">
        {trendingItems.length < 1 ? (
          <div>No items to view</div>
        ) : (
          trendingItems.map(item => <SneakerLI key={item.id} sneaker={item} />)
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.shop.isLoading,
    trendingItems: selectTrendingNowItems(state)
  };
};

export default connect(mapStateToProps)(TrendingList);
