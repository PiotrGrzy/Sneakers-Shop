import React from 'react';
import OrderItem from './OrderItem';
import renderer from 'react-test-renderer';

test('snapshot renders', () => {
  const mock = {
    brand: 'Adidas',
    model: 'One',
    quantity: 2,
    price: 50
  };
  const component = renderer.create(<OrderItem item={mock} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
