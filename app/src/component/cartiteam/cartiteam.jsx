import React,{useContext} from "react";
import {ShopContext} from "../../Context/ShopContext"
import remove_icon from "../assets/cart_cross_icon.png"
import "./cartiteam.css";

import { Link } from "react-router-dom";
function Cart_iteam(){
    const {all_product,cartItem,removeTocart,gettotalAmount}=useContext(ShopContext)


    const Paymentgatway=(e)=>{
        e.preventDefault();
    if(gettotalAmount()===0){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_AQcWvXY8SA8Atg",
        key_secret:"1WMZLTjpgygf6r5ZczGkt1YN",
        amount: gettotalAmount() *100,
        currency:"INR",
        name:"e-com ",
        description:"for testing purpose",
        handler: function(response){
          alert(response.Razorpay_payment_id);
        },
        prefill: {
          name:"manojkumar",
          email:"vmkmano13@gmail.com",
          contact:"9629252986"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }

    }
    // const {}=useContext(ShopContext)
    return(

        <div>
            <div className="cartitems">
                <div className="cartiteam-fromat-main">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Toatl</p>
                    <p>Remove</p>
                 </div>
                 <hr /> 
              
                {
                    all_product.map((e)=>{
                        if(cartItem[e.id]>0){
                            return  <div key=""> 
                            <div className="cartitems-format cartiteam-fromat-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className="cartitems-quantity">
                                    <p>{cartItem[e.id]}</p>
                                  
                                </button>
                                <p>{e.new_price*cartItem[e.id] }</p>
                                <img src={remove_icon} onClick={()=>{removeTocart(e.id)}} className="remove_icon" />
                            </div>
                            <hr />
                            </div>} })}
                            <div className="cartitam-down">
                                <div className="cartitems-total">
                                    <h1>Cart Total</h1>
                                    </div>
                            <div className="cartiteam-total-iteam-fee">
                                <p>Shipping fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                           
                            <div className="cartiteam-total-item">
                                <h3>Total</h3>
                                <h3>₹{gettotalAmount()}</h3>
                            
                                
                                
                                </div>
                                <div className="chkout">
                                {/* <button onClick={(e)=>{Paymentgatway(e)}}>PAYMENT</button> */}
                              
                                <button><Link to="/cheackout">CHECKOUT</Link></button>
                                </div>
                               


                            </div>
                            
                 
            </div>

        </div>
    )
}

export default  Cart_iteam;
