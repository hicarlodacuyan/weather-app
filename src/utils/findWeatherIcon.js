const findWeatherIcon = async loc => {
  try {
    const weatherIconData = await fetch(
      `https://openweathermap.org/img/wn/${loc.icon}@2x.png`
    )

    return weatherIconData
  } catch (err) {
    return console.log(err)
  }
}

export default findWeatherIcon
