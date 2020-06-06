/**
 * Mocking client-server processing
 */
  export default {
    submitChildForm (childData, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    }
  }