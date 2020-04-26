import React from "react";
import renderer from "react-test-renderer"

import Button from "./Button.components"

test("Button renders as expected", () => {
  const component = renderer.create(
    <Button text="Example" color="red"/>
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});