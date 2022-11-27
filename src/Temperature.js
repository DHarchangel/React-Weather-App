import React from 'react';
import './temperature.css';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

function Temperature(props) {
  function formatDate() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[props.data.date.getDay()]
    let hours = props.data.date.getHours()
    if (hours < 10) {hours = `0${hours}`}
    let minutes = props.data.date.getMinutes()
    if (minutes < 10) {
      minutes= `0${minutes}`
    }
    return (
      <span> {day} {hours} <span className='units'>:</span>  {minutes} </span>
    )
  }
  return (
    <div className='temperature'>
      <div className="city">
        <h1>{props.data.city}</h1>
        <p>{formatDate()}</p>
        <p>{props.data.description}</p>
        <p>Wind: <span className='units'>{props.data.wind}km/hr</span></p>
      </div>
      <div className='tempIcon' >
        <div className='icon'>

        <WeatherIcon icon={props.data.icon} alt={props.data.description} />
        </div>
        
        <WeatherTemp celsius={props.data.temperature} />

      </div>
    </div>
  );
}

export default Temperature;