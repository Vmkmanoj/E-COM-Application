import React,{useContext, useState} from "react";
import "./nav.css";
import logo from "./assets/logo.png";
import cart from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";


function Nav(){

    const [menu,setMenu]=useState("shop")
  const {ToatlcartItem}=useContext(ShopContext)
return(
        <div className="Navbar">
                <div id="Nav-logo">
                    <img src={logo} alt="logo" />
                    <p>Fashion Zone</p>
                </div>
                
                <ul className="Nav-menu">
                    <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none',color:'#626262'}}>Shop</Link>{menu==="shop"?<hr></hr>:<></> } </li>
                    <li onClick={()=>{setMenu("Women")}}><Link to="/Women" style={{textDecoration:'none',color:'#626262'}}>Women</Link>{menu==="Women"?<hr></hr>:<></> } </li> 
                    <li onClick={()=>{setMenu("Men")}}><Link to="/Men" style={{textDecoration:'none',color:'#626262'}}>Men</Link>{menu==="Men"?<hr></hr>:<></> } </li>
                    <li onClick={()=>{setMenu("Kids")}}><Link to="/Kids" style={{textDecoration:'none',color:'#626262'}}>Kids</Link>{menu==="Kids"?<hr></hr>:<></> } </li>
                </ul>

                <div className="Nav-logoing-card">
                    {localStorage.getItem('auth-token')?
                    <button onClick={()=>{localStorage.removeItem('auth-token');

                     window.location.replace("/")}}>Log Out</button>:
                     <Link to="/login"><button>Login</button></Link>
                     
                     
                     }                   
                 
                 
                 
                 <Link to="/cart"><img src={cart}></img></Link> 
                    <div className="Nav-logoing-card-count">{ToatlcartItem()}</div>
                </div>

        </div>
    )

}
export default Nav;

