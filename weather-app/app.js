const request = require('request')
const chalk = require('chalk')

const weatherStackURL = 'http://api.weatherstack.com/current?access_key=41f301fcb12814c43c6c6ee56fb801f1&query=37.8267,-112.4233'

request({ url: weatherStackURL, json: true }, (error, response) => {
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

// Geocoding
// Address -> Lat/Long -> Weather

// Challenge: Print the lat/long for Los Angeles
//
// 1) Fire off a new request to the URL explored in browser
// 2) Have the request module parse it as JSON
// 3) Print both the latitude and longtitude to the terminal
// 4) Test your work!

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FncmlvcnNrYXlhIiwiYSI6ImNsMHV3Z3h1dDAwcTYzY3FsZXdjbmk0Ym0ifQ.55iZsoB63UqMKPgUcLim1w&limit=1'

request({ url: geoCodeURL, json: true }, (error, response) => {
  const [long, lat] = response.body.features[0].center
  console.log(lat, long)
})