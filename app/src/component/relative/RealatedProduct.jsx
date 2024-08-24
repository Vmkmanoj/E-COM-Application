import React from "react";
import {useState,useEffect} from "react";
import Iteam from "../items/items"
import data_product from "../assets/data"
import "./RealatedProduct.css"
function RealatedProduct(){
    const [popular_product,setPopular_product]=useState([]);


useEffect(()=>{
    fetch("http://localhost:4000/populerwomen")
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data));
},[])

 
    return(
        <div className="relatedproduct">
            <h1>
                Related Product
            </h1>
            <hr></hr>
            <div className="relatedproduct-item">
                {popular_product.map((iteam,i)=>{
return <Iteam 
key={i}  
id={iteam.id} 
name={iteam.name} 
image={iteam.image}
new_price={iteam.new_price}
old_price={iteam.old_price}   


>



</Iteam>
                })}
            </div>

        </div>
    )
}

export default  RealatedProduct;  