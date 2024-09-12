import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../assets/assets';
import ReactDOM from 'react-dom';
import { StoreContext } from '../StoreContext/StoreContext';

const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Sign up");
    const {LoginProfile,setLoginProfile}=useContext(StoreContext);
    const statusUpdate=()=>{
        setShowLogin(false);
        setLoginProfile(true);
    }
    const LoginPage=<div className='login-popup'>
    <form onSubmit={(e)=>e.preventDefault()} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />   
        </div>    
        <div className="login-popup-inputs">
            {currState==="Login" ? <></> : <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button onClick={( )=>statusUpdate()}> {currState==="Sign up"? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"  />
            <p>By continuing, i agree to the terms of use & privarcy policy</p>
        </div>
       {
        currState==='Login' ?  
        <p>Create a new account ? <span onClick={()=>{setCurrState("Sign up")}}>Click here</span></p> :
        <p>Already have an account ? <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>
       }
    </form>
</div>

return ReactDOM.createPortal(LoginPage,document.getElementById('login-portal'));
   
  
}

export default LoginPopup