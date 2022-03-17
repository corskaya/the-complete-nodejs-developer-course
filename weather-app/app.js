const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')

const weatherStackURL = 'http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=37.8267,-112.4233'

request({ url: weatherStackURL, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red('Unable to connect to weather service'))
  } else if (response.body.error) {
    console.log(chalk.red('Unable to find location'))
  } else {
    const location = response.body.location
    const name = location.name
    const country = location.country
    const region = location.region

    const current = response.body.current
    const temperature = current.temperature
    const feelsLike = current.feelslike

    console.log(chalk.green(`Location: ${name}, Country: ${country}, Region: ${region}`))
    console.log(chalk.green(`It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees.`))
  }
})

geocode('Istanbul', (error, ...data) => {
  if (error) {
    console.log(error)
  } else {
    data.forEach(data => console.log(data))
  }
})