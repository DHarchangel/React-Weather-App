import React, { useState } from 'react';
import axios from 'axios';
import "./search.css";

function Search() {
    let [search, setSearch] = useState('');
    
    let [showUpdate, setShowUpdate] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
        axios.get(url).then(showTemperature);
       

    }
    function handleChange(e) {
        setSearch(e.target.value);
    }
    function showTemperature(res) {
        let icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
        
        console.log(res.data);
        setShowUpdate(
<ul>
                
                <li>Temperature: <strong>{Math.round(res.data.main.temp)}℃</strong></li>
                <li>Description: <strong> {res.data.weather[0].description}</strong></li>
                <li>Humidity: <strong>{res.data.main.humidity}%</strong> </li>
                <li>Wind: <strong>{res.data.wind.speed}km/hr</strong> </li>
                <li><img src={icon} alt="" /></li>
</ul>

            
        )
    }
    
  
    return (
        <div>

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
                    placeholder="Enter a City ..."
                    value="Search"
                    id='search-btn'
                />
            </form>
            <div className='info'>

            {showUpdate}
            </div>
        </div>

    );
}

export default Search;