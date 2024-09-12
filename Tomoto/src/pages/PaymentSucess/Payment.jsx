import React, { useEffect, useState } from 'react';
import "./PaymentPage.css"
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import PaymentGateway from '../../components/PaymentGateway/PaymentGateway';
// import { Navigate } from 'react-router-dom';

const Payment = () => {
    const Navigate=useNavigate();
    const [isLoading,setLoding]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoding(false);
        }, 1500);
    },[])
    
  return (
       isLoading ? <div className='loading'><div class="loader"></div></div> :<PaymentGateway/>
  );
};

export default Payment;
