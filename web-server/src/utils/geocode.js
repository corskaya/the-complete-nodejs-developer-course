const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2FncmlvcnNrYXlhIiwiYSI6ImNsMHV3Z3h1dDAwcTYzY3FsZXdjbmk0Ym0ifQ.55iZsoB63UqMKPgUcLim1w&limit=1`

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      const data = 'Unable to connect to location services'
      callback(data, undefined)
    } else if (body.features.length === 0) {
      const data = 'Unable to find location'
      callback(data, undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode