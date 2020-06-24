import apiClient from "./apiclient"

/**
 * Mocking client-server processing
 */
export default {
    submitCustomerForm (customer, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    },

    submitCustomerDocuments (customerDocuments, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    },
    
    submitShippingDetails (shippingDetails, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    },

    createCustomer(customer){
      console.log(apiClient.post('api/createCustomer',customer));
      return apiClient.post('api/createCustomer',customer);
    },

    submitDocuments(documents){
      // apiClient.defaults.headers= {
      //   'Content-Type': 'multipart/form-data'
      // }
      return apiClient.post('api/documentupload',documents);
    },

    submitShippingDetailsForm(shippingDetails){
      return apiClient.post('api/addorder',shippingDetails);
    },
  }