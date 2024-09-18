import React, { useContext, useMemo, useState } from 'react';
import "./Cart.css";
import { StoreContext } from '../../StoreContext/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = ({setShowLogin}) => {
    const { cartItems, food_list, FilterFormCart,getTotalCartAmount,LoginProfile} = useContext(StoreContext);
    const Navigate=useNavigate();
    const [promoCode,setPromo]=useState(1);
    const discountPrice=(promoCode/100)*getTotalCartAmount();

    const statusUpdate=()=>{
        {LoginProfile ? Navigate('/payment') : setShowLogin(true) }
    }
    const deliveryFee=2;
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    cartItems.map((cartItm, index) => {
                        const foodItem = food_list.find(food => food._id === cartItm.id);
                        if (foodItem) {
                            return (
                               <div className='hr'>
                                 <div key={index} className="cart-items-title cart-items-item">
                                  <img className='prodImage' src={foodItem.image} alt="" />
                                    <p>{foodItem.name}</p>
                                    <p>${foodItem.price}</p>
                                    <p>{cartItm.quantity}</p>
                                    <p>${foodItem.price * cartItm.quantity}</p>
                                    
                                    <button onClick={()=>{FilterFormCart(cartItm.id)}}>Remove</button>
                                 </div>
                                <hr />
                               </div>
                            );
                        }
                        
                    })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                            
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()>0 ? deliveryFee:0}</p>
                            
                        </div>
                        <hr />
                        {
                            promoCode>1 && getTotalCartAmount()>0 ? 
                            <>
                            <div className="cart-total-details">
                                <p>Coupon discount</p>
                                <p>${discountPrice}</p>
                            
                            </div>
                            <hr /></>:
                            <></>
                        }
                        <div className="cart-total-details">
                            <b>Total</b>
                            {/* getTotalCartAmount()>0 ? getTotalCartAmount()+deliveryFee:0 */}
                            <b>${promoCode>1 && getTotalCartAmount()>0 ? (getTotalCartAmount()-discountPrice)+deliveryFee : getTotalCartAmount()>0? getTotalCartAmount()+deliveryFee:0}</b>
                        </div>
                        <hr />
                    </div>
                    {getTotalCartAmount()>0 ? <button onClick={()=>{LoginProfile ? Navigate('/order') : setShowLogin(true) }}>PROCEED TO CHECKOUT</button>:<></>}
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code,Enter it here</p>
                        <div className="cart-promocode-input">                      
                                <input type="text" className='promo-code' placeholder='promocode'   />
                                <button onClick={()=>{getTotalCartAmount()>0 ? setPromo(25):null}} >Apply</button>                    
                        </div>
                        <p style={{marginTop:'10px'}}>use <b style={{color:'green',fontSize:'20px'}}> AVAIL25 </b> to get flat 25% off</p>     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
