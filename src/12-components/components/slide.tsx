import React from "react";

import "./slide.css"

import {headingStyle, headingFinalStyle,bodyStyle,textCenter,ListUnStyle} from "./slide-styles"

const el=(
    <div className="slide">
        <h1 style={headingFinalStyle}>Styling in React</h1>

        <hr />

        <ul style={{...bodyStyle,...ListUnStyle}}>
            <li>You can style using css classes</li>
            <li>You can style using inline styles</li>
        </ul>
    </div>
)

export default el;