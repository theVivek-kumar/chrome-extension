
import React from 'react'
import { useState } from 'react'
import Clock from '../Components/Clock/Clock'
import Quot from '../Components/quot'
import Weather from '../Components/Weather'
import { useNavigate } from 'react-router-dom'


function Home() {
  const name = localStorage.getItem('userName')
  const [focus, setFocus] = useState("")
  const [view, setView] = useState("block")
  const navigate = useNavigate();
  function keyHandler (e){
    if (e.key === "Enter") {
      localStorage.setItem('focus', focus);
      setView("none")
      navigate('/main')
    }
    
  }
  return (
      <div className='App'>
        <div style={{
            backgroundImage: `url("https://picsum.photos/1920/720?random")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
        }}>
      <div className='main-container'>
         <div className='weather-input'><Weather/></div>
                <div className='wrapper-continer'>
                    <h2 className='heading--1 clock'><Clock/></h2>
            <h3 className='heading-GE'>Good Evening,{name}</h3>
            <div style={{display:view}}></div>
            <h4 className='heading-main focus'>What is your main focus today</h4>
              <div className='input-text-container'><input className='input-name-section' type="text"
                  onKeyPress={keyHandler} 
                    onChange={(e) =>setFocus(e.target.value)}
                        /></div>
            
                      <div><Quot/></div>
                </div>
        </div>
        </div>
      </div>
    
  )
}

export default Home