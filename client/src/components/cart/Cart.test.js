import React from 'react';
import { shallow, configure } from 'enzyme';
import { Cart } from './Cart';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  cartItems: [{ id: 0 }, { id: 1 }],
  isOpen: false,
};

describe('Cart', () => {
  describe('when no items in cart', () => {
    const wrapper = shallow(<Cart cartItems={[]} />);
    it('renders empty cart info if no items', () => {
      expect(wrapper.find('div').text()).toEqual('Cart is empty...');
    });

    it('has a class hidden when not open', () => {
      expect(wrapper.find('div').hasClass('hidden')).toBe(true);
    });
  });

  describe('when items in cart', () => {
    const wrapper = shallow(<Cart {...props} />);

    it('renders proper number of CartItems', () => {
      expect(wrapper.find('CartItem').length).toEqual(2);
    });

    it('has a class hidden when not open', () => {
      expect(wrapper.find('div').hasClass('hidden')).toBe(true);
    });
  });
});
