const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location-message')
const forecastMessage = document.querySelector('#forecast-message')

// Challenge: Render content to paragraphs
//
// 1) Select the second message p from JavaScript
// 2) Just before fetch, render loading message and empty p
// 3) If error, render error
// 4) If no error, render location and forecast
// 5) Test your work! Search for errors and for valid locations

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  const location = search.value

  locationMessage.textContent = 'loading...'
  forecastMessage.textContent = ''

  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        locationMessage.textContent = data.error
      } else {
        locationMessage.textContent = data.location
        forecastMessage.textContent = data.forecast
      }
    })
  })
})