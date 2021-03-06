import { shallow } from 'enzyme';
import * as React from 'react';
import { CheckboxWithLabel } from '../Checkbox';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox: any = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  // Interaction demo
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');

  // Snapshot demo
  expect(checkbox).toMatchSnapshot();
});
