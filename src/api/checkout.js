import apiClient from "./apiclient"

/**
 * Mocking client-server processing
 */
export default {
    submitCustomerForm (customer, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    },

    createCustomer(customer){
      return apiClient.post('api/createCustomer',customer)
    }
  }