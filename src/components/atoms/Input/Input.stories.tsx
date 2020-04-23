import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.component"

storiesOf("Input", module)
    .add("default",
        () => <Input value="test" onChange={()=>{}}/>
    )