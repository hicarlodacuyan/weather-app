import './main.scss'

const weatherIcon = document.getElementById('weatherIcon')
const weatherInfo = document.getElementById('weatherInfo')
const weatherTemp = document.getElementById('weatherTemp')
const weatherLocation = document.getElementById('weatherLocation')

const findCurrentWeatherData = async loc => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=e72cbe506351290ff39725a41bce3680`
    )
    const currentWeatherData = await weatherResponse.json()

    console.log(currentWeatherData)
    weatherLocation.textContent = `${currentWeatherData.name}`
    weatherInfo.textContent = `${currentWeatherData.weather[0].description}`
    weatherTemp.textContent = `${Math.round(currentWeatherData.main.temp)}`
    weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`
  } catch (err) {
    console.log(err)
  }
}

findCurrentWeatherData('cainta')
