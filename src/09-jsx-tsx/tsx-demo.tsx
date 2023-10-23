import React, {ReactElement} from "react";

import "./welcome.css";

let el: ReactElement;

el = (
    <div title="Welcome">
        <h1>Welcome to the world of React </h1>
        <p id="introduction">
            <span id="framework-name" className="text-bold">React</span>
            &nbsp; is a JS library for building UI created by Facebook
        </p>
    </div>
)
export default el;
