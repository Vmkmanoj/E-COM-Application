import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import Breakcrum from "../breakrum/breakrum.jsx";
import  Productdisplay from "../product_display/productdisplay.jsx"
import Descriptionbox from "../descriptionbox/descriptionbox.jsx";
import RealatedProduct from "../relative/RealatedProduct.jsx";
function Product(){

    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();

    const product=all_product.find((e)=>e.id===Number(productId))


    return(

        <div>
            <Breakcrum product={product}></Breakcrum>
            <Productdisplay product={product} ></Productdisplay>
            <Descriptionbox></Descriptionbox>
      <RealatedProduct></RealatedProduct>

          
        </div>
    )
}

export default Product;