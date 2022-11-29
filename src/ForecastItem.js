import React from 'react'
import WeatherIcon from './WeatherIcon';

function ForecastItem(props) {
    function formatDate() {
        let date = new Date(props.data.dt * 1000)
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = date.getDay();
       
        return (
            <span> {days[day]} </span>
        );
    }
  return (
      <div><div>
          <h2>{formatDate()}</h2>
          <WeatherIcon icon={props.data.weather[0].icon} size={32} />
          <div className='forecastTemperature'><span className=" forecastTemperature-max"><strong>{Math.round(props.data.temp.max)}°</strong></span>
              <span className="units forecastTemperature-min">{Math.round(props.data.temp.min)}°</span>
          </div>
      </div>
</div>
  )
}

export default ForecastItem