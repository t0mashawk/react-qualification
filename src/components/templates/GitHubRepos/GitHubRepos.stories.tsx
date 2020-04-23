import React from "react";
import { storiesOf } from "@storybook/react";
import GitHubRepos from "./GitHubRepos.component"

storiesOf("GitHubRepos", module)
    .add("test",
        () => <GitHubRepos>
            <p>Here are github repos</p>
        </GitHubRepos>
    )