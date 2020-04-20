import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { ResultsList } from './ResultsList';
import Spinner from '../spinner/Spinner';
import { items } from '../../data/fixtures';

const props = {
  searchResults: items,
  isLoading: false,
  searchQuery: {
    category: [],
  },
};

describe('ResultsList', () => {
  const wrapper = shallow(<ResultsList {...props} />);
  console.log(wrapper.debug());
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders proper num of items', () => {
    expect(wrapper.find('SneakerLi').length).toEqual(3);
  });

  it('renders information if no search results', () => {
    const wrapper2 = shallow(<ResultsList {...props} searchResults={[]} />);
    expect(wrapper2.find('.results-list__noresults').text()).toEqual(
      'No results with given criteria'
    );
  });
});
