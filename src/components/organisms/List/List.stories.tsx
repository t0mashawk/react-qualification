import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.component";

const listItems = [
    { name: "test1", html_url: "test1" },
    { name: "test2", html_url: "test2" },
    { name: "test11", html_url: "test11" },
  ]

storiesOf("List", module)
  .add("default", () => (
    <List
      items={listItems}
    />
  ))

