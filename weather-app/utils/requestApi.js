const request = require('request')

const requestApi = (url) => {
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    })
  })
}

module.exports = requestApi