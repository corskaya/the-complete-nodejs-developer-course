const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=${latitude},${longitude}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(chalk.red('Unable to connect to weather service'), undefined)
    } else if (response.body.error) {
      callback(chalk.red('Unable to find location'), undefined)
    } else {
      const current = response.body.current
      const temperature = current.temperature
      const feelsLike = current.feelslike

      callback(undefined, chalk.green(`It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees.`))
    }
  })
}

module.exports = forecast