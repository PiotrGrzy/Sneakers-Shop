import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { CheckoutItem } from './CheckoutItem';
import { item } from '../../data/fixtures';

const props = {
  item: { ...item, quantity: 1 },
  addItemToCart: jest.fn(),
  decrementItem: jest.fn(),
  removeItemFromCart: jest.fn(),
};

describe('CheckoutItem', () => {
  const wrapper = shallow(<CheckoutItem {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
