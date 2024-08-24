import React,{createContext, useState,useEffect} from "react";

import Iteam from "../component/items/items";

export const ShopContext = createContext(null) ;

const getdefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
            }
            return cart;}
const ShopContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState(getdefaultCart());

    const[all_product,setAll_product]=useState([])
    
  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAll_product(data))
            if(localStorage.getItem("auth-token"))
            {
              fetch('http://localhost:4000/getcart', {
              method: 'POST',
              headers: {
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem("auth-token")}`,
                'Content-Type':'application/json',
              },
              body: "",
            })
              .then((resp) => resp.json())
              .then((data) => {setCartItem(data)});
            }
    }

   
 
const gettotalAmount=()=>{
    let total=0;
    for(const items in cartItem){
        if(cartItem[items]>0){
            let iteminfo=all_product.find((product)=>product.id===Number(items));
            total+=iteminfo.new_price*cartItem[items]
    }
}
return total;

}

const ToatlcartItem=()=>{
    let totalcart=0;
    for(let iteam in cartItem){
        if (cartItem[iteam]>0) {
            totalcart+=cartItem[iteam];
    }
    

}
return totalcart;
}
const addTocart = (IteamId) => {

    setCartItem((prev) => ({
        ...prev,
        [IteamId]: prev[IteamId] + 1
    }));
    if (localStorage.getItem("auth-token")) {
        // JSON.stringify() should be called separately
        const requestBody = JSON.stringify({
            "IteamId": IteamId
        });
        fetch('http://localhost:4000/addtocart', {
            method: 'POST',
            headers: {
                Accept: 'application/from-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: requestBody
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
    }
    else{
        alert("You Need to Login...");
    }
}

const removeTocart=(IteamId)=>{
    setCartItem((prev)=>({
       ...prev,[IteamId]:prev[IteamId]-1
    }))
    if (localStorage.getItem("auth-token")) {
        // JSON.stringify() should be called separately
        const requestBody = JSON.stringify({
            "IteamId": IteamId
        });
        fetch('http://localhost:4000/removefromcart', {
            method: 'POST',
            headers: {
                Accept: 'application/from-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: requestBody
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
    }

   
 
}
useEffect(() => {
    fetchInfo();
    addTocart()
  }, [])
const ContextValue= {all_product,cartItem,removeTocart,addTocart,ToatlcartItem,gettotalAmount};


    return( 
        <ShopContext.Provider value={ContextValue}>
            {props.children}

            </ShopContext.Provider>




    )
}


export default ShopContextProvider;