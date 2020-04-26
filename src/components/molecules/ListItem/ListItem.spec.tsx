import React from "react";
import renderer from "react-test-renderer"

import ListItem from "./ListItem.component"

test("LiListItem renders as expected", () => {
  const component = renderer.create(
    <ListItem text="Example Value" href="www.google.com" buttonText="example"/>
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});