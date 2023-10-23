import React, { ReactNode } from "react";

import "./slide.css"

type Prop = {
    heading: string,
    page?: {
        current: number,
        total: number
    },
    childern: React.ReactNode
};



import "./slide.css"
function Slide({heading, page, childern}: Prop) {

    const slide = (
        <div className="slide">
            <span className="slide-number">{page?.current} of {page?.total}</span>
            <h1 className="heading-text text-center">{heading}</h1>
            <hr />

            <div className="body-text">
                {childern}

            </div>

        </div>
    );
    return slide;
};

export default Slide;