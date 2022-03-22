const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=${latitude},${longitude}`

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const current = body.current
      const temperature = current.temperature
      const feelsLike = current.feelslike
      const humidity = current.humidity

      callback(undefined, `It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees. Humidity is ${humidity}%.`)
    }
  })
}

module.exports = forecast