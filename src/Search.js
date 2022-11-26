import React, { useState } from 'react';
import axios from 'axios';
import "./search.css";

function Search(props) {
    let [search, setSearch] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
        axios.get(url).then(props.handleResponse);
       

    }
    function handleChange(e) {
        setSearch(e.target.value);
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
            </div>
        </div>

    );
}

export default Search;