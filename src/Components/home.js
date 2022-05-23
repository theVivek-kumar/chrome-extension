
import React from 'react'
import Clock from './Clock/Clock'
import Weather from './Weather'


function Home() {
    return (
      <div className='main-container'>
        <Clock/>
        <h1 className='heading-GE'>Good Evening, {}.</h1>

        {/* <div style={{display:display}}>
        <p className="para">What is your main focus for today?</p>
        <input 
        onKeyPress={keyHandler} 
        onChange={(e) => setFocus(e.target.value)}
        type="text" className='input-container-focus' placeholder=""/>
        </div>

        <div className='focus-container' style={{display:display1}}>
        <input type="checkbox" className='checkbox' placeholder=""/>
        <p className='para-focus'> {localStorage.getItem('focus')}</p>
        </div> */}
        
    </div>
    
  )
}

export default Home