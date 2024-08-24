import React, { useEffect, useState } from "react";
// import "/popular.css"
// import data_product from "../assets/data"
import Iteam from "../items/items";
import "./popular.css"
function Popular(){

    const [popular_product,setPopular_product]=useState([]);


useEffect(()=>{
    fetch("http://localhost:4000/populerwomen")
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data));
},[])

    return(
        <div className="popular">
            <h1>POPULAR IN PRODUCT</h1>
            <hr></hr>
            <div className="populat_item">
                {popular_product.map((iteam,i)=>{
                        return <Iteam 
                        key={i} 
                        id={iteam.id} 
                        name={iteam.name} 
                        image={iteam.image}
                        new_price={iteam.new_price}
                        old_price={iteam.old_price}    
                       />
                })}
            </div>
        </div>
    );
}

export default Popular;