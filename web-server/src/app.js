const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', { // string parameter matches with index.hbs inside views folder
    title: 'Weather',
    name: 'Cagri Orskaya'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About App',
    name: 'Cagri Orskaya'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This is the help message',
    title: 'Help',
    name: 'Cagri Orskaya'
  })
})

// Challenge 1: Update weather endpoint to accept address
//
// 1) No address? Send back an error message
// 2) Address? Send back the static JSON
// - Add address property onto JSON which returns the provided address
// 3) Test /weather and /weather?address=philadelphia

// Challenge 2: Wire up /weather
//
// 1) Require geocode/forecast into app.js
// 2) Use the address to geocode
// 3) Send back the real forecast and location
// 4) Send back the real forecast and location

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address'
    })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Please provide a search term'
    })
  }
  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Cagri Orskaya',
    errorMessage: 'Help article not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Cagri Orskaya',
    errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})