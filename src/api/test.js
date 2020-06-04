/**
 * Mocking client-server processing
 */
  export default {
    submitChildData (childData, cb, errorCb) {
      setTimeout(() => {cb()}, 100)
    }
  }