import React from "react";
import "./breakrum.css"

import arrow_icon from "../assets/breadcrum_arrow.png";
function Breakcrum(props){

    const {product}= props;

    return(
        <div className="breakcrum">
            HOME <img src={arrow_icon} ></img>
            SHOP <img src={arrow_icon}  />{product.category}
            <img src={arrow_icon} alt="" />{product.name}

        </div>

    )




}

export default Breakcrum