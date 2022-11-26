import React from 'react'
import './temperature.css'

function Temperature() {
  return (
      <div className='temperature'>
          <div className="city">
              <h1>Onitsha</h1>
              <p>Tuesday 18:43, Clear</p>
              <p>Precipitation: <span className='units'>65%</span>, Wind: <span className='units'>3km/hr</span></p>
          </div>
          <div className="temp">
              <h1><span className='tempDigit'>☀ 33 </span> <span className='symbol'> <span className='celsius'>℃ </span>|<span className='farenheit'> ℉</span> </span></h1>
          </div>
    </div>
  )
}

export default Temperature