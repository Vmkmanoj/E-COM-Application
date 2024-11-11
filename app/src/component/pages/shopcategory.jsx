import { useContext } from "react";
import React from "react";
import "./css/Shopcategory.css"
import { ShopContext } from "../../Context/ShopContext";
import Iteam from "../items/items";
import drowpdown from "../assets/dropdown_icon.png"
import { useState } from "react";

function Shopcategory(props){
    const {all_product}=useContext(ShopContext);

    console.log(all_product)

    let a = all_product.filter((x) => x.catagory===props.Catagory)

    console.log(a.length)

    const [category,SetCategory] = useState({});

    // console.log(props.Catagory)

    // console.log(all_product.category)

    

    

    // console.log(a);

    // console.log(props.Category);

    // SetCategory(all_product)

    

    return(
        <div className="Shop-catehory">
            <img className="bannerImage" src={props.banner}  alt="" />
            <div className="shopcategory-indexsort">
            <p>
                <span>Showing {props.Catagory}</span> out of 
                {
                   props.Catagory===all_product.category ? "" : all_product.length
                    
                } products
            </p>
            <div className="shopcategory-sort">
            <button type="" className="dropbtn">SortBy </button>
            <div className="dropdown-content">
                <button>Low - High</button>
                <button>High-  Low</button>
            </div>

            </div>
            </div>

            <div className="shopcategory-product">
                {all_product.map((iteam,i)=>{
                     
                    if(props.Catagory===iteam.category){
                      
                        return <Iteam 
                        key={i} 
                        id={iteam.id} 
                        name={iteam.name} 
                        image={iteam.image}
                        new_price={iteam.new_price}
                        old_price={iteam.old_price} 

                        
                        >
                            
                        </Iteam>
                        
                    }
                    else{
                        return null
                    }
                    
                })}



            </div>


            
           



        </div>
    )

}

export  default Shopcategory;