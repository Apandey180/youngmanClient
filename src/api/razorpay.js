import apiClient from "./apiclient";
  
export default{ 
  createOrder(){
    return apiClient.post('api/createPaymentOrder');
  }, 
};