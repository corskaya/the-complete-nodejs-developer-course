const request = require('request')
const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=37.8267,-112.4233'

// Challenge: Print a small forecast to the user
//
// 1) Print "It is currently 9 degrees out. It feels like 5 degrees out."
// 2) Test your work!

request({ url: url, json: true }, (error, response) => {
  const location = response.body.location
  const name = location.name
  const country = location.country
  const region = location.region

  const current = response.body.current
  const temperature = current.temperature
  const feelsLike = current.feelslike

  console.log(chalk.red.inverse(`Location: ${name}, Country: ${country}, Region: ${region}`))
  console.log(chalk.red.inverse(`It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees.`))
})