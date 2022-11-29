import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import './forecast.css';
import ForecastItem from './ForecastItem';

function Forecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);


    function handleResponse(res) {

        setForecast(res.data.daily);
        setLoaded(true);

    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className='forecast'>


                {forecast.map((dailyForecast, index) => {
                    if (index < 5) {
                        return (
                            <div key={index}>
                                <ForecastItem data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}

            </div>
        );

    } else {
        let lat = props.coords.lat;
        let lon = props.coords.lon;
        let apiKey = '5f472b7acba333cd8a035ea85a0d4d4c';
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
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

export default Forecast;