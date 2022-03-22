const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location-message')
const forecastMessage = document.querySelector('#forecast-message')

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  const location = search.value

  locationMessage.textContent = 'loading...'
  forecastMessage.textContent = ''

  fetch(`/weather?address=${location}`).then(response => {
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