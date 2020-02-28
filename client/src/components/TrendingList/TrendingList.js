import React from 'react';
import { connect } from 'react-redux';

const TrendingList = ({ isLoading, trendingItems }) => {
  if (isLoading) return <div>Loading trending items...</div>;

  return (
    <div className="trending">
      {trendingItems.length < 1 ? (
        <div>No items to view</div>
      ) : (
        trendingItems.map(item => <div key={item.id}>{item.model}</div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.shop.isLoading,
    trendingItems: state.shop.trending
  };
};

export default connect(mapStateToProps)(TrendingList);
