import React from "react";
import renderer from "react-test-renderer";

import List from "./List.component";

test("List renders as expected", () => {
    const listItems = [
        { name: "test1", html_url: "test1" },
        { name: "test2", html_url: "test2" },
        { name: "test11", html_url: "test11" },
      ]

  const component = renderer.create(<List items={listItems} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});