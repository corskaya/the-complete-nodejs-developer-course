const request = require('request')
const chalk = require('chalk')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2FncmlvcnNrYXlhIiwiYSI6ImNsMHV3Z3h1dDAwcTYzY3FsZXdjbmk0Ym0ifQ.55iZsoB63UqMKPgUcLim1w&limit=1`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      const data = chalk.red('Unable to connect to location services')
      callback(data, undefined)
    } else if (response.body.features.length === 0) {
      const data = chalk.red('Unable to find location')
      callback(data, undefined)
    } else {
      const [long, lat] = response.body.features[0].center
      callback(undefined, lat, long)
    }
  })
}

module.exports = geocode