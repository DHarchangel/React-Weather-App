import React, { useState } from 'react';
import Forecast from './Forecast';
import Header from './Header';
import "./weather.css";
import Temperature from './Temperature';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';

function Search(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    function getCity() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
        axios.get(url).then(handleResponse);
    }
    
    function handleResponse(res) {

        console.log(res.data);
        setWeatherData({
            ready: true,
            temperature: res.data.main.temp,
            date: new Date(res.data.dt * 1000),
            humidity: res.data.main.humidity,
            icon: res.data.weather[0].icon,
            wind: res.data.wind.speed,
            description: res.data.weather[0].description,
            city: res.data.name,
            coord: res.data.coord
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        getCity();

    }
    function handleChange(e) {
        setCity(e.target.value);
    }

    if (weatherData.ready) {
        return (
            <div>
                <Header />
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter a City ..."
                        id='search-box'
                        autoFocus='on'
                    />
                    <input
                        type="submit"
                        value="Search"
                        id='search-btn'
                    />
                </form>
                <Temperature data={weatherData} />
                <Forecast coords={weatherData.coord} />
                <p><a href="https://github.com/DHarchangel/React-Weather-App" target='_blank' rel="noreferrer">Open Source App </a> Build by Angel</p>
            </div>

        );
    } else {
        getCity();
        return (
            <div className='spinner'>
                <CirclesWithBar

                    height="100"
                    width="100"
                    color="#FC709B"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor="#8C66F1"
                    innerCircleColor="#FC709B"
                    barColor="#8C66F1"
                    ariaLabel='circles-with-bar-loading'
                />;
            </div>
        );
    }
}

export default Search;