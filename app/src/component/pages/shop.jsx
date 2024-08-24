import React from "react";
import Hero from "../hero/hero";
import Popular from "../popular/popular";
import Offers from "../offers/offers";
import Newcollection from "../Newcollection/newcollection";
import Newslatter from "../Newslatter/newslatter";

function Shop(){


    return(

        <div>
            <Hero>
            </Hero>
            <Popular></Popular>
            
            <Offers></Offers>
          
            <Newcollection></Newcollection>
            <Newslatter></Newslatter>
            {/* <Fooder></Fooder> */}
            
        </div>
    )
}

export default Shop;