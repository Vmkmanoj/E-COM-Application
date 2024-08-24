import React from "react";
import "./hero.css";
import handicon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png";
import hero_img  from "../assets/hero_image.png";

function Hero(){
    return(
        <div className="hero">
            <div className="heroleft">
                <h2>
                    NEW ARRIVALS ONLY
                </h2>
                <div className="hand-icon">
                    <p>New</p>
                    {/* <img src={handicon}></img> */}
                </div>
                <p>Collections</p>
                <p>For everone</p>
                <div className="hero-latest-but">
                <div>
                    <a href="#latest" >Latest collections</a>
                    </div>
                <img src={arrow_icon}></img>
                </div>
            </div>
             {/* <div className="heroright">
                <img src={hero_img} alt="" />
            </div>  */}
        </div>
    )
}

export default Hero;