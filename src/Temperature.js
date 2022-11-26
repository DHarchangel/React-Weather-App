import React from 'react';
import './temperature.css';

function Temperature(props) {
  return (
    <div className='temperature'>
      <div className="city">
        <h1>{props.city}</h1>
        <p>Tuesday 18:43, {props.description}</p>
        <p>Precipitation: <span className='units'>65%</span>, Wind: <span className='units'>{props.wind}km/hr</span></p>
      </div>
      <div className="temp">
        <div className="img"><img src={props.icon} alt="Weather Icon" /></div>
        <div>
          <h1><span className='tempDigit'> {props.temp} </span> <span className='symbol'> <span className='celsius'>℃ </span>|<span className='farenheit'> ℉</span> </span></h1>
        </div>

      </div>
    </div>
  );
}

export default Temperature;