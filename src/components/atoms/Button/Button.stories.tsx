import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.components"

storiesOf("Button", module)
    .add("default",
        () => <Button text="Test"/>
    )
    .add("colored-button",
        () => <Button color="navy" text="Test"/>
    )