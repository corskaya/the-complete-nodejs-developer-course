const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Challenge: Create a partial for the footer
//
// 1) Setup the template for the footer partial "Created by Some Name"
// 2) Render the partial at the bottom of all three pages
// 3) Test your work by visiting all three pages

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
    title: 'Weather App',
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

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Istanbul'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})