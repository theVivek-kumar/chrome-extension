import React from 'react'
import { useState } from 'react'
import Clock from '../Components/Clock/Clock'
import Quot from '../Components/quot'
import Weather from '../Components/Weather'
function MainArea() {
  const name = localStorage.getItem('userName')
  const [style, setStyle] = useState('none')
  const [isCheck, setIsCheck] = useState(true)
  function mainFocusHandler(e) {
    if (isCheck) {
      setIsCheck(false)
      setStyle('line-through')
    }
    else {
      setStyle('none')
      setIsCheck(true)
    }
  }
  const myfocus = localStorage.getItem('focus');
  return (
    <div className='App'>
      <div style={{
        backgroundImage: `url("https://picsum.photos/1920/720?random")`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}>
        <div className='main-container'>
          <div className='weather-input'><Weather /></div>
          <div className='wrapper-continer'>
            <h2 className='heading--1 clock'><Clock /></h2>
            <h3 className='heading-GE'>Good Evening,{name}</h3>
            <div className='input-text-container'><input className='input-name-section checkbox-r'
              onChange={mainFocusHandler} value={isCheck}
              type="checkbox" placeholder="" />
              <p className='para-focus' style={{ textDecorationLine: style }}>{myfocus}</p>

            </div>
            
            <div><Quot /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea