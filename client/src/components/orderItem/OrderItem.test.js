import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import OrderItem from './OrderItem';
import { item } from '../../data/fixtures';

const props = {
  dataItem: { ...item, quantity: 1 },
};

describe('OrderItem', () => {
  const wrapper = shallow(<OrderItem item={props.dataItem} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
