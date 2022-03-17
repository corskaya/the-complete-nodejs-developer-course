const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// Challenge: Create a reusable function for getting the forecast
//
// 1) Setup the "forecast" function in utils/forecast.js
// 2) Require the function in app.js and call it as shown below
// 3) The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(44.1545, -75.7088, (error, data) => {
  if (error) {
    console.log(error, 15)
  } else {
    console.log(data, 17)
  }
})

geocode('Istanbul', (error, ...data) => {
  if (error) {
    console.log(error, 23)
  } else {
    data.forEach(data => console.log(data, 25))
  }
})