import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setQuery } from '../../redux/search/search.actions';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import './range-slider.scss';

const RangeSlider = ({ setQuery, price }) => {
  return (
    <div className="range-slider">
      <h3 className="range-slider__title">Price between:</h3>
      <InputRange
        step={10}
        maxValue={1000}
        minValue={0}
        formatLabel={price => `${price} $`}
        value={price}
        onChange={value => setQuery('price', value)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: state.search.price
  };
};
export default connect(mapStateToProps, { setQuery })(RangeSlider);
