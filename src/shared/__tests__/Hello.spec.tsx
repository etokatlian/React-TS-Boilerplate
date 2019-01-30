import { shallow } from 'enzyme';
import React from 'react';
import { Hello } from '../Hello';

test('Hello component renders', () => {
  const HelloComponent = shallow(<Hello />);

  // Snapshot demo
  expect(HelloComponent).toMatchSnapshot();
});
