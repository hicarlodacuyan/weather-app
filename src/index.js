import './main.scss'

const weatherIcon = document.getElementById('weatherIcon')
const weatherInfo = document.getElementById('weatherInfo')
const weatherTemp = document.getElementById('weatherTemp')
const weatherMinMax = document.getElementById('weatherMinMax')
const weatherWindSpeed = document.getElementById('windSpeed')
const weatherHumidity = document.getElementById('humidity')
const weatherLocation = document.getElementById('weatherLocation')

let previousVal = ''

const findCurrentWeatherData = async loc => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=e72cbe506351290ff39725a41bce3680`
    )
    const currentWeatherData = await weatherResponse.json()

    weatherLocation.textContent = `${currentWeatherData.name}`

    weatherInfo.textContent = `${currentWeatherData.weather[0].description}`

    weatherTemp.textContent = `${Math.round(currentWeatherData.main.temp)}`

    weatherMinMax.textContent = `${Math.round(
      currentWeatherData.main.temp_min
    )}° | ${Math.round(currentWeatherData.main.temp_max)}°`

    weatherWindSpeed.textContent = `${Math.round(
      currentWeatherData.wind.speed
    )}`

    weatherHumidity.textContent = `${Math.round(
      currentWeatherData.main.humidity
    )}%`

    weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`

    console.log(currentWeatherData)
  } catch (err) {
    console.log(err)
  }
}

findCurrentWeatherData(weatherLocation.textContent)

weatherLocation.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    // Checks if the user inputs the same location
    if (previousVal === weatherLocation.textContent) {
      e.preventDefault()
      // Simply return if same location is queried to save API call
      return
    }

    e.preventDefault()
    findCurrentWeatherData(weatherLocation.textContent)
    previousVal = weatherLocation.textContent
  }
})
