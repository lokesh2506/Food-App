import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets"
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContext/StoreContext';
const Navbar = ({setShowLogin}) => {
  
    const[menu,SetMenu]=useState("home");
    const Navigate=useNavigate();


    const { cartLength,LoginProfile,setLoginProfile,totalQuantity,cartState,setCartState} = useContext(StoreContext);

    const cartChange=()=>{
        setCartState(true);
        Navigate("/cart");
    }
    const menuChange=()=>{
        setCartState(false);
        Navigate("/");
    }
   
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" onClick={()=>{menuChange()}} className='logo' />
        {!cartState ?
            <ul className='navbar-menu'>
                <Link  to="/" onClick={()=>{SetMenu("home")}} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>{SetMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
                <a  href='#Appdownload' onClick={()=>{SetMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                <a href="#footer" onClick={()=>{SetMenu("contact us")}} className={menu==="contact us"?"active":""}>contact us</a>
            </ul>:<></>
        }
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} onClick={()=>{cartChange()}} alt="" />
                {cartLength >0 ?<div className="dot">{totalQuantity()}</div>:<></>}
            </div>
            {!LoginProfile ?  <button onClick={()=>setShowLogin(true)}>Sign in </button> : 
            <div className='Logout'>
                <img src={assets.user_Info} className='user-info'/>
                <button onClick={()=>{setShowLogin(false);setLoginProfile(false)}} className='logout'>Logout</button>
            </div> }
        </div>
    </div>
  )
}

export default Navbar