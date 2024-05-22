import React from "react"
import sunny from "../assets/Sunny.svg"
import partlyCloudy from '../assets/PartlyCloudy.svg'
import cloudy from '../assets/Cloudy.svg'
import rainy from "../assets/Rainy.svg"

const getWeatherIcon = (forecast) => {
  switch (forecast) {
    case 'Cloudy' :
      return cloudy
    case 'Partly cloudy' :
      return partlyCloudy
    case 'Rainy' :
      return rainy
    default: 
      return sunny
  }
}

function WeatherCard({ city }) {
  return (
    <div className = "card">
      <div className = "img-container">
        <img className="card-img-top" src = {getWeatherIcon(city.forecast)} alt="Card image cap" id = "icon"/>
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  )
}

export default WeatherCard
