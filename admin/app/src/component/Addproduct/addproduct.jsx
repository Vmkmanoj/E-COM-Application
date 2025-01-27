import React, { useState } from "react";

import "./addproduct.css"
import uploadarea from "../assets/upload_area.svg";
  
function Addproduct(e){
    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
  });
  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

    const displayimage=(e)=>{

        setImage(e.target.files[0]);

    }

    const AddProduct = async () =>{
         
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {data.success?alert("Product Added"):alert("Failed")});
        
    }
  }


    return(
        <div className="addproduct">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input type="text" value={productDetails.name} onChange={changeHandler} name="name" placeholder="Type here" />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="Type here" />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" placeholder="Type here" />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product category</p>
          <select  name="category" value={productDetails.category} onChange={changeHandler} className="add-product-selector" >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select> 
        </div>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <label htmlFor="file-input">
            <img className="addproduct-thumbnail-img"   src={!image ? uploadarea :URL.createObjectURL(image)} alt="" />
          </label>
          <input type="file" name="image" id="file-input" hidden onChange={(e)=>{displayimage(e)}} />
        </div>
        <button className="addproduct-btn" onClick={AddProduct}>ADD</button>
      </div>
    )
}


export default Addproduct;