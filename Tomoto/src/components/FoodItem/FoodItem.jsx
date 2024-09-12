import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../StoreContext/StoreContext'

const FoodItem = ({id,name,description,price,image}) => {
     const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
     const isInCart=cartItems.find((item)=>item.id==id );
     
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
           {
                ! isInCart  ?
                <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)} alt=""  />:
                <div className='food-item-counter'>
                  <img src={assets.remove_icon_red}  onClick={()=>removeFromCart(id)} alt="" />
                  <p>{isInCart.quantity}</p>
                  <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                </div>
            
           }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem