const findWeather = async loc => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=e72cbe506351290ff39725a41bce3680`
    )
    const currentWeatherData = await weatherResponse.json()

    return currentWeatherData
  } catch (err) {
    return console.log(err)
  }
}

export default findWeather
