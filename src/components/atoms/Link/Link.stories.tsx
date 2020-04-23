import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./Link.components"

storiesOf("Link", module)
    .add("default",
        () => <Link text="link" href="./"/>
    )