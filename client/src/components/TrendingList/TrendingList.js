import React from 'react';
import { connect } from 'react-redux';
import { selectTrendingNowItems } from '../../redux/shop/shop.selectors';
import SneakerLI from '../SneakerLI/SneakerLI';
import Spinner from '../spinner/Spinner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './trending-list.scss';

const TrendingList = ({ isLoading, trendingItems }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1299 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    desktopSmall: {
      breakpoint: { max: 1298, min: 910 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 909, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <h2 className="trending-list__header">Trending Now:</h2>
      <Carousel
        className="trending-list"
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="trending-list__carousel-item"
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={750}
      >
        {trendingItems.length < 1 ? (
          <div>No items to view</div>
        ) : (
          trendingItems.map(item => <SneakerLI key={item.id} sneaker={item} />)
        )}
      </Carousel>
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
