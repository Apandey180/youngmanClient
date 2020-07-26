import apiClient from "./apiclient";
import express from 'express';

// const app = require('express')();
app = express();
  
export default{ 
  createOrder(){
    return apiClient.post('api/createPaymentOrder');
  }, 

  submitPaymentStatus(){
    return apiClient.post('api/submitPaymentStatus', data);
  },

};

// apiClient.post('/verifyPayment', (req,res)=>{
      // const SECRET = process.env.VUE_RAZORPAY_PAYMENT_VERIFY_SECRET;
//    res.json({ status: 'ok'});
// });