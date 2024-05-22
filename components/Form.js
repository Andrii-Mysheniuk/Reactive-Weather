import React, {useState} from 'react'

function Form({location, setLocation, duration, setDuration, tempUnit, setTempUnit}) {
  const [typedLocation, setTypedLocation] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setLocation(typedLocation)
    setTypedLocation('')
  }

  return (
    <div className = "form">
      <form onSubmit={handleSubmit}>
        <label className = "city">City:
          <input 
            type="text"
            value={typedLocation}
            onChange={e => setTypedLocation(e.target.value)}
          />
        </label>
        <button 
          className = "btn btn-primary" 
          type="submit"
        >Submit</button>
        <select className='select select-duration' value={duration} onChange={e => setDuration(e.target.value)}>
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        <select className='select select-temp-unit' value={tempUnit} onChange={e => setTempUnit(e.target.value)}>
          <option value={'metric'}>Celsius</option>
          <option value={'imperial'}>Fahrenheit</option>
        </select>
      </form>
    </div>
  )
}

export default Form
