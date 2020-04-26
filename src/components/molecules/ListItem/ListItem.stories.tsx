import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem from "./ListItem.component"

storiesOf("ListItem", module)
    .add("test",
        () => <ListItem text="link" href="http://www.google.com" buttonText="like"/>
    )