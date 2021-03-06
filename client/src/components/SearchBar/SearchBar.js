import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
import RangeSlider from '../rangeSlider/RangeSlider';
import CustomButton from '../customButton/CustomButton';
import { fetchSearchResults, setLoading } from '../../redux/shop/shop.actions';
import { brands, genders, categories } from './query-data';

import './search-bar.scss';

const SearchBar = ({ searchQuery, fetchSearchResults, setLoading }) => {
  const { brand, gender, category } = searchQuery;
  const searchOptions = [...brand, ...gender, ...category];

  const handleSubmit = e => {
    e.preventDefault();
    setLoading();
    fetchSearchResults(searchQuery);
  };

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__wrapper">
          <Dropdown type="brand" title="Brand" itemsList={brands} />
          <Dropdown type="gender" title="Gender" itemsList={genders} />
          <Dropdown type="category" title="Category" itemsList={categories} />
        </div>
        <div className="search__wrapper">
          <RangeSlider />
          <CustomButton type="submit" onClick={handleSubmit}>
            Search
          </CustomButton>
        </div>
      </form>
      <div className="search__tags">
        {searchOptions.map(option => (
          <span className="search__tag" key={option}>
            #{option}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchQuery: state.search
  };
};

export default connect(mapStateToProps, { fetchSearchResults, setLoading })(
  SearchBar
);
