import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
import RangeSlider from '../rangeSlider/RangeSlider';
import CustomButton from '../customButton/CustomButton';
import { fetchSearchResults } from '../../redux/shop/shop.actions';
import { brands, genders, categories } from './query-data';

import './search-bar.scss';

const SearchBar = ({ searchQuery, fetchSearchResults }) => {
  return (
    <div className="search">
      <form className="search__form">
        <Dropdown type="brand" title="Select Brand" itemsList={brands} />
        <Dropdown type="gender" title="Select Gender" itemsList={genders} />
        <Dropdown
          type="category"
          title="Select Category"
          itemsList={categories}
        />
        <RangeSlider />
        <CustomButton
          type="submit"
          onClick={e => {
            e.preventDefault();
            fetchSearchResults(searchQuery);
          }}
        >
          Search
        </CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchQuery: state.search
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(SearchBar);
