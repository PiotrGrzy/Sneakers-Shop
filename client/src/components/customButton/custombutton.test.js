import React from 'react';
import CustomButton from './CustomButton';
import renderer from 'react-test-renderer';
test('renders snapshot', () => {
  const component = renderer.create(
    <CustomButton className="test">Test Button</CustomButton>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
