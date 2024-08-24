import React, { useState } from "react";
import "./css/loginsignup.css"

function Login(){
    const[state, setState] = useState("Login");

const Login =async()=>{
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
}
const Signup =async()=>{
    console.log("sign up function excuted",formData)
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
    
    
}
const [formData,setFromData]=useState({
    username:"",
    password:"",
    email:""
})

const Eventhanderler=(e)=>{

setFromData({...formData,[e.target.name]:e.target.value})

}


    return(

        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsigup-fields">
                   {state==="Sign up" ? 
                    <input type="text"  name="username" value={formData.username} onChange={Eventhanderler} placeholder="Your Name"/> : <></>} 
                    <input type="email" name="email" value={formData.email} onChange={Eventhanderler} placeholder="Your Email" required/>
                    <input type="password" name="password" value={formData.password} onChange={Eventhanderler} placeholder="Password" required />
                </div>
                <button onClick={()=>{state==="login"? Login():Signup()}}>Continue</button>
                {state==="Sign up"? <p className="loginsignup-login"> Already Have an Account..?  <span className="login-point" onClick={(e)=>{setState("Login")}}>Login here.</span></p> : 
                <div className="loginsignup-login">Create new Account...!<span onClick={(e)=>{setState("Sign up")}}>sign up </span></div>
                   }
                   <div className="loginsign-agree">
                     {/* <input type="checkbox" name=" " id=""/>
                   <p>By Continuing i agree to the trems of use & privacy policy</p> */}
           
                    
            </div>
        </div>
        </div>
    )
}

export default Login;