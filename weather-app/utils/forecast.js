const requestApi = require('./requestApi')
const chalk = require('chalk')

const forecast = async (latitude, longitude) => {
  const url = `http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=${latitude},${longitude}`

  try {
    const result = await requestApi(url)
    if (result.error) {
      return chalk.red('Unable to find location')
    }

    const current = result.current
    const temperature = current.temperature
    const feelsLike = current.feelslike

    return chalk.green(`It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees.`)

  } catch (e) {
    throw new Error('Unable to connect to weather service')
  }
}

module.exports = forecast