import React, { useContext } from "react";

import "./productdisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull from "../assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";
// import Add_but from "../assets/add_cartbut/addbut";
// import Add_but from "../assets/add_cartbut/addbut";


function Productdisplay(props){

    const  { product } = props;
    const {addTocart}=useContext(ShopContext)

    return(
       <div className="productdisplay">

        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplaymain-img" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdispay-right-star">

                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
           <div className="product-right-price">


           <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
           </div>
          

            <div className="productdisplay-right-description">
                A lightweigth, usualluy knitted,pullover shirt ,close-fitting and weigth a round neckline and short sleeves,worn as an undershirt or outline garment
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size :</h1>
                <div className="product-dispay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XL</div>
                </div>
            </div>
            {/* <Add_but className="button"></Add_but> */}


            <button onClick={(e)=>{addTocart(product.id)}}  
            
            
            
            
            className="cart_button">Add Cart</button>
            <p className="productdisplay-right-category"><span>Categoty:</span>Women,T_Shirt,Crop Top</p>
            <p className="productdisplay-left-category"><span>Tags:</span>Modern,latests</p>
        </div>




       </div>
    )
}

export default Productdisplay;