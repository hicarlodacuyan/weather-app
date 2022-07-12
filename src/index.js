import './main.scss'

const h1 = document.createElement('h1')

const findCurrentWeatherData = async loc => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${loc},uk&APPID=e72cbe506351290ff39725a41bce3680`
    )
    const currentWeatherData = await response.json()

    console.log(currentWeatherData.weather[0].description)
    h1.textContent = `Right now in London, it's ${currentWeatherData.weather[0].description}`
  } catch (err) {
    console.log(err)
  }
}

findCurrentWeatherData('london')

h1.textContent = 'Hello, World!'
h1.classList.add('text-3xl', 'font-bold', 'text-gray-500', 'm-20')

document.getElementById('root').appendChild(h1)
