import React from 'react';
import './forecast.css';

function Forecast() {
    return (
        <div className='forecast'>
            <div>
                <h2>Wed</h2>
                <div className='icon'>☀</div>
                <div className='units'>28℃</div>
            </div>
            <div>
                <h2>Thu</h2>
                <div className='icon'>⛅</div>
                <div className='units'>28℃</div>
            </div>
            <div>
                <h2>Fri</h2>
                <div className='icon'>🌦</div>
                <div className='units'>28℃</div>
            </div>
            <div>
                <h2>Sat</h2>
                <div className='icon'>☀</div>
                <div className='units'>28℃</div>
            </div>
            <div>
                <h2>Sun</h2>
                <div className='icon'>☀</div>
                <div className='units'>28℃</div>
            </div>
        </div>
    );
}

export default Forecast;