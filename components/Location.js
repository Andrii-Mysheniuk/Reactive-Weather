import React, {useEffect, useState} from "react"
import sunny from "../assets/Sunny.svg"
import partlyCloudy from '../assets/PartlyCloudy.svg'
import cloudy from '../assets/Cloudy.svg'
import rainy from "../assets/Rainy.svg"

const getWeatherIcon = (forecast) => {
  switch (forecast) {
    case 'Clouds' :
      return cloudy
    case 'Partly cloudy' :
      return partlyCloudy
    case 'Rain' :
      return rainy
    default: 
      return sunny
  }
}

function Location ({ location, duration, tempUnit }) {
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = process.env.OPENWEATHER_API_KEY

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${tempUnit}&cnt=${duration * 8}&appid=${apiKey}`)
        const data = await res.json()
        console.log(data.list)
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location, apiKey])

  console.log(weatherData)

  if (!weatherData || !weatherData.list) {
    return <div><h4>This city doesn't exist. Please try again</h4></div>;
  }

  const filteredData = weatherData.list.filter(forecast =>
    forecast.dt_txt.includes('12:00:00')
  )

  console.log('filtered array ' + filteredData)

  return (
    <div class="container">
      {filteredData.map(forecast => (
        <div className="card">
          <div className="img-container">
            <img
              className="card-img-top"
              src={getWeatherIcon(forecast.weather[0].main)}
              alt={'Card image cap'}
              id="icon"
            />
          </div>
          <div className="card-body">
            <h1>{location}</h1>
            <h3 className="card-title">{forecast.dt_txt.split(' ')[0]}</h3>
            <h5 className="card-text">{forecast.main.temp} {tempUnit === 'metric' ? '°C' : '°F'}</h5>
            <h5 className="card-text">{forecast.weather[0].main}</h5>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Location
