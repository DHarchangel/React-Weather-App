import './App.css';
import Forecast from './Forecast';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(res) {
    
    console.log(res.data)
    setWeatherData({
      ready: true,
      temperature: Math.round(res.data.main.temp),
      humidity: res.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
      wind: res.data.wind.speed,
      description: res.data.weather[0].description,
      city: res.data.name
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <Header />
            <Search res={handleResponse} />
            <Temperature temp={weatherData.temperature} city={weatherData.city} wind={weatherData.wind} description={weatherData.description} icon={weatherData.icon} />
            <Forecast />
            <p><a href="https://github.com/DHarchangel/React-Weather-App" target='_blank' rel="noreferrer">Open Source App </a> Build by Angel</p>
          </div>
        </div>
      </div>
    );
  } else {
    let city = 'Onitsha';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(handleResponse);
    return 'Loading...';
  }

}

export default App;
