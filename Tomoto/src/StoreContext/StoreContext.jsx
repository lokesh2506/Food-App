import {  createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext();

const StoreContextProvider=(props)=>{
    const [cartItems,SetCartItem]=useState([]);
    const cartLength=cartItems.length;
    const [cartState,setCartState]=useState(false);
   
    const [LoginProfile,setLoginProfile]=useState(false);
    const totalQuantity = () => {
        return cartItems.reduce((prev, newItem) => {
            return prev + (newItem.quantity || 0);
        }, 0); 
    };
    

    const addToCart=(itemId)=>{
        const existingItem = cartItems.find((item) => item.id === itemId);
        if(!existingItem){
            SetCartItem((prev)=>[...prev,{ "id": itemId, "quantity": 1 }]);
            
        }
        else{
            SetCartItem((prev)=>prev.map((item)=>
                item.id===itemId ? 
                 { ...item, quantity: item.quantity +1 } 
                : item
            ))
        }
        
    }
    const FilterFormCart=(itemId)=>{
        SetCartItem((prev)=> (prev.filter(item=>item.id!==itemId)))
        
    }
    
    const removeFromCart=(itemId)=>{
        
       cartItems.map((item)=>item.id===itemId && item.quantity===1 ? FilterFormCart(itemId):
       SetCartItem((prev)=>
            
        prev.map((item)=>
        
        item.id===itemId ? 
        {...item,quantity:item.quantity-1} : item
        ))) 
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item of cartItems){
            let itemInfo=food_list.find((food)=>food._id===item.id);
           
            if(itemInfo){
                totalAmount+=itemInfo.price*item.quantity;
            }
        }
        return totalAmount;
    }
    const contextValue={food_list,cartItems,addToCart,removeFromCart,cartState,setCartState,SetCartItem,FilterFormCart,getTotalCartAmount,cartLength,LoginProfile,setLoginProfile,totalQuantity};
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );

    
}
export default StoreContextProvider;