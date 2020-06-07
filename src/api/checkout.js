import apiClient from "./apiclient"

/**
 * Mocking client-server processing
 */
export default {
    submitCustomerForm (customer, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    },

    createCustomer(customer){
      console.log("here");
      apiClient.post('api/createCustomer',customer).then(response =>{
        console.log("in response");
        // return response;
        if(response.status == 200)
          // return response.data;
          return Promise.resolve(response.data);
        else return "Creating customer failed";
      })
      .catch(error =>{
        console.log("in error");
        return Promise.reject("Creating customer failed");
        // return "Creating customer failed";
      });
    }
  }