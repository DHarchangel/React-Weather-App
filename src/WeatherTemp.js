import React, { useState } from 'react';

function WeatherTemp(props) {
    const [unit, setUnit] = useState('celcuis');

    function showFahrenheit(e) {
        e.preventDefault();
        setUnit('fahrenheit');
    }
    function showCelsius(e) {
        e.preventDefault();
        setUnit('celcuis');
    }
    if (unit === 'celcuis') {
        return (
            <div className="temp">
                <h1><span className='tempDigit'> {Math.round(props.celsius)} </span> <span className='symbol'> <span className='celsius'>℃ </span>|<span className='farenheit click' onClick={showFahrenheit}><a href="/"> ℉</a></span> </span></h1>
            </div>

        );
    } else {
        let farenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="temp">
                <h1><span className='tempDigit'> {Math.round(farenheit)} </span> <span className='symbol'> <span className='celsius click' onClick={showCelsius}><a href="/">℃ </a></span>|<span className='farenheit' > ℉</span> </span></h1>
            </div>

        );
    }
}

export default WeatherTemp;