import React from 'react';
import { shallow, configure } from 'enzyme';
import { CartItem } from './CartItem';
import { item } from '../../data/fixtures';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  item: {
    ...item,
    quantity: 1,
  },
};

describe('CartItem', () => {
  const wrapper = shallow(<CartItem {...props} />);
  it('renders item image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(props.item.imageMain.url);
  });

  it('renders item brand', () => {
    expect(wrapper.find('.cart-item__brand').text()).toEqual(props.item.brand);
  });
  it('renders item model', () => {
    expect(wrapper.find('.cart-item__model').text()).toEqual(props.item.model);
  });

  it('renders item quantity', () => {
    expect(wrapper.find('.cart-item__quantity').text() * 1).toEqual(
      props.item.quantity
    );
  });
});
