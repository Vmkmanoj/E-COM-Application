import React from "react";
import "./offers.css"
import spl from "../assets/sploff.jpg"
import background from "../assets/backgroundoffer.jpg"

function Offers(){


    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="button-49">Check NOW</button>  
    </div>
            <div className="offers-right">
                <img src={spl}></img>
            </div>
        </div>
    )
}

export default Offers;