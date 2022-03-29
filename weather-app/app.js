const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]
async function weather() {
  const geocodeData = await geocode(address)
  console.log(geocodeData)

  const forecastData = await forecast(geocodeData.latitude, geocodeData.longitude)
  console.log(forecastData)
}

if (!address) {
  console.log('No address provided')
} else {
  weather()
}