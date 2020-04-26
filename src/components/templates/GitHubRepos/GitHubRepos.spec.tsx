import React from "react";
import renderer from "react-test-renderer";

import GitHubRepos from "./GitHubRepos.component"

test("GitHubRepos renders as expected", () => {

  const component = renderer.create(<GitHubRepos> <p>Here are github repos</p></GitHubRepos>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});