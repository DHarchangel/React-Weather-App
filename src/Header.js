import React from 'react'
import './header.css'

function Header() {
  return (
      <div className='header'>
          <div className='logo'>WEATHER APP</div>
          <div className='headerList'>
              
              <div>
                  <div className='active list'>Onitsha</div>
                  <div className="activeDot"></div>
              </div>
              <div>
                  
                  <div className='list'>Abuja</div>
                  <div></div>
                 </div>
              <div>
                  <div className='list'>Lagos</div>
                  <div></div>
              </div>
              <div>
                  
                  <div className='list'> Lisbon</div>
                  <div></div>
              </div>
              
          </div>
      </div>
  )
}

export default Header