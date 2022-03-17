const request = require('request')
const chalk = require('chalk')

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

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FncmlvcnNrYXlhIiwiYSI6ImNsMHV3Z3h1dDAwcTYzY3FsZXdjbmk0Ym0ifQ.55iZsoB63UqMKPgUcLim1w&limit=1'

// Challenge: Handle errors for geocoding request
// 
// 1) Setup an error handler for low-level errors
// 2) Test by disabling network request and running the app
// 3) Setup error handler for no matching results
// 4) Test by altering the search term and running the app

request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red('Unable to connect to location services'))
  } else if (response.body.features.length === 0) {
    console.log(chalk.red('Unable to find location'))
  } else {
    const [long, lat] = response.body.features[0].center
    console.log(lat, long)
  }
})