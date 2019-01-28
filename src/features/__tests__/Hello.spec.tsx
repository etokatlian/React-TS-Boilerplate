import * as React from "react";
import { shallow } from "enzyme";
import { Hello } from "../Hello";

test("Hello component renders", () => {
  const HelloComponent = shallow(<Hello />);

  // Snapshot demo
  expect(HelloComponent).toMatchSnapshot();
});
