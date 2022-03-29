const chalk = require('chalk')
const requestApi = require('./requestApi')

const geocode = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2FncmlvcnNrYXlhIiwiYSI6ImNsMHV3Z3h1dDAwcTYzY3FsZXdjbmk0Ym0ifQ.55iZsoB63UqMKPgUcLim1w&limit=1`

  try {
    const result = await requestApi(url)

    if (result.features.length === 0) {
      return chalk.red('Unable to find location')
    }

    return {
      latitude: result.features[0].center[1],
      longitude: result.features[0].center[0],
      location: result.features[0].place_name
    }
  } catch (e) {
    throw new Error('Unable to connect to location services')
  }
}

module.exports = geocode