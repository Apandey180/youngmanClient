import apiClient from "./apiclient";
  
export default{ 
  createOrder(customer){
    return apiClient.post('api/createPaymentOrder', customer);
  }, 

  submitPaymentDetails(data){
    return apiClient.post('api/paymentDetails', data);
  },
  
  createSubcription(){
    return apiClient.post('api/createSubcription');
  },

};