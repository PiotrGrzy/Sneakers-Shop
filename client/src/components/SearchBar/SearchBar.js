import React, { useEffect } from 'react';
import Dropdown from '../dropdown/Dropdown';
import RangeSlider from '../rangeSlider/RangeSlider';
import { brands, genders, categories } from './brands-data';

import './search-bar.scss';

const SearchBar = () => {
  return (
    <div className="search">
      <h2 className="search__heading"> Search for your sneakers:</h2>
      <form className="search__form">
        <Dropdown title="Select Brand" values={brands} />
        <Dropdown title="Select Gender" values={genders} />
        <Dropdown title="Select Category" values={categories} />
        <RangeSlider />
      </form>
    </div>
  );
};

export default SearchBar;
