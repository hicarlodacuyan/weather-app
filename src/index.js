import './main.scss'
import findWeather from './utils/findWeather'
import findWeatherIcon from './utils/findWeatherIcon'

const weatherIcon = document.getElementById('weatherIcon')
const weatherInfo = document.getElementById('weatherInfo')
const weatherTemp = document.getElementById('weatherTemp')
const weatherHumidity = document.getElementById('humidity')
const weatherWindSpeed = document.getElementById('windSpeed')
const weatherMinMax = document.getElementById('weatherMinMax')
const weatherLocation = document.getElementById('weatherLocation')

let previousVal = ''

const updateDOM = async location => {
  const weatherData = await findWeather(location)
  const weatherIconData = await findWeatherIcon(weatherData.weather[0])

  weatherIcon.src = weatherIconData.url
  weatherInfo.textContent = `${weatherData.weather[0].description}`
  weatherTemp.textContent = `${Math.round(weatherData.main.temp)}`
  weatherMinMax.textContent = `${Math.round(
    weatherData.main.temp_min
  )}° | ${Math.round(weatherData.main.temp_max)}°`
  weatherLocation.textContent = `${weatherData.name}`
  weatherHumidity.textContent = `${Math.round(weatherData.main.humidity)}%`
  weatherWindSpeed.textContent = `${Math.round(weatherData.wind.speed)}`
}

updateDOM(weatherLocation.textContent)

weatherLocation.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    // Checks if the user inputs the same location
    if (previousVal === weatherLocation.textContent) return

    updateDOM(weatherLocation.textContent)
    previousVal = weatherLocation.textContent
  }
})
