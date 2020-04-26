import React from "react";
import renderer from "react-test-renderer"

import Link from "./Link.components"

test("Link renders as expected", () => {
  const component = renderer.create(
    <Link text="Example Value" href="www.google.com"/>
  );

  const tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});