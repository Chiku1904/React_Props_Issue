import React, {Fragment} from "react";


const fruitEl=(
    <Fragment>
    <li>Apple</li>
    <li>Banana</li>
    </Fragment>
);

const VeggiesEl=(
    <Fragment>
    <li>Potato</li>
    <li>Onion</li>
    </Fragment>
);

const shoppingList=(
    <Fragment>
        <ul>
            {fruitEl}
            {VeggiesEl}
        </ul>
    </Fragment>
);


export default shoppingList;