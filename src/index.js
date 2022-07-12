import './main.scss'

const container = document.createElement('div')
container.classList.add('flex', 'justify-center', 'items-center', 'm-20')

const h1 = document.createElement('h1')
h1.classList.add('text-3xl', 'font-bold', 'text-gray-500')

const img = document.createElement('img')

const findCurrentWeatherData = async loc => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=e72cbe506351290ff39725a41bce3680`
    )
    const currentWeatherData = await response.json()

    console.log(currentWeatherData.name)
    h1.textContent = `Right now in ${currentWeatherData.name}, it's ${currentWeatherData.weather[0].description}`
    img.src = `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`
  } catch (err) {
    console.log(err)
  }
}

findCurrentWeatherData('manila')

container.appendChild(h1)
container.appendChild(img)
document.getElementById('root').appendChild(container)
