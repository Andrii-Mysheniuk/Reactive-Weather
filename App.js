import React, {useState} from 'react';
// import WeatherCard from './components/WeatherCard.js'
import Form from './components/Form.js'
import Location from './components/Location.js'
// import cities from './data.js'


function App() {
  const [location, setLocation] = useState('London')
  const [duration, setDuration] = useState(1)
  const [tempUnit, setTempUnit] = useState('metric')

  return (
    <>
      <h1 className = "title">REACTIVE WEATHER</h1>
      <h3 className = "subtitle">Up to the minute weather news</h3>
      <Form 
        location={location} 
        setLocation={setLocation} 
        duration={duration}
        setDuration={setDuration}
        tempUnit={tempUnit} 
        setTempUnit={setTempUnit} 
      />
      <Location 
        location={location} 
        duration={duration} 
        tempUnit={tempUnit} 
      />
      {/*
      <div className = "app">
        {cities.map((city, index) => (
          <WeatherCard 
            key={index}
            city={city}
          />
        ))}
      </div>
      */}
    </>
  )
}

export default App;
