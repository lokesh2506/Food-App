import React, { useContext } from 'react'
import "./PaymentGateway.css"
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext';
const PaymentGateway = () => {
    const Navigate=useNavigate();
    const{SetCartItem,setCartState}=useContext(StoreContext);
  return (
    <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="message-box _success">
                            <img src={assets.payment_success}/>
                            <h2> Your payment was successful </h2>
                            <p> Thank you for your payment. we will <br/>be in contact with more details shortly </p>      
                        </div> 
                    </div> 
                </div> 
            <hr/>
        
        
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="message-box _success _failed">
                            <img src={assets.payment_failure} className='failure'/>
                            <h2> Your payment failed </h2>
                             <p>  Try again later </p>
                         </div> 
                    </div> 
                </div> 
                <button className='go-home' onClick={()=>{SetCartItem([]); setCartState(false);Navigate('/');  }}>Back to Home</button>
        </div> 
  )
}

export default PaymentGateway