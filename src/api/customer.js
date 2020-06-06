/**
 * Mocking client-server processing
 */
export default {
    submitCustomerForm (customer, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    }
  }