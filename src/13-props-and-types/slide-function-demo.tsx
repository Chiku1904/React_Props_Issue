import React from "react";
import Slide from "./components/slide-function";

import "./slide-demo.css"
const el=(
    <>
    <Slide heading="How do you styles in React?">

    <ul className="list-unstyled" style={{ marginTop: "1.5em" }}>
                    <li>You can style using css classes</li>
                    <li>You can provide inline styles using a JS object</li>
                </ul>

    </Slide>

    {/* <Slide heading="What are props in React" page={{current:2, total:2}}>

   <p>Props values used to customize the React components.
    Children are special prop.
   </p>
    </Slide> */}
    </>
)

export default el;