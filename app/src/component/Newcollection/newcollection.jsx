import  React, { useEffect, useState }  from "react";
import Iteam from "../items/items";
import newcollection from '../assets/new_collections'

import "./newcollection.css"
function Newcollection(){

    const [new_collections,setNew_collection]=useState([])

useEffect(()=>{
    fetch("http://localhost:4000/newcollections")
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
},[])


    return(
        <div className="newcollection" id="latest">
            <h1>NEW COLLECTION</h1>
            <h1></h1>
            <div className="collection">
                {new_collections.map((iteam,i)=>{
                    return <Iteam 
                    key={i} 
                        id={iteam.id} 
                        name={iteam.name} 
                        image={iteam.image}
                        new_price={iteam.new_price}
                        old_price={iteam.old_price} 
                    ></Iteam>
                })}

            </div>



        </div>
    )
}

export default Newcollection;