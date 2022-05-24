import { React ,useState} from 'react'
import { NavLink } from 'react-router-dom'
import Weather from '../Components/Weather'



function LandingPage() {
    const [name, setName] = useState("")
    localStorage.setItem('userName', name)
  
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
                    <h2 className='heading--1'>Hello, What's your good name?</h2>
                    <div className='input-text-container'><input className='input-name-section' type="text" onChange={(e) => setName(e.target.value)}
                        value={name} placeholder='' />
                        <NavLink to="/home"><button className='input-text-container btn'> Continue </button></NavLink></div>
                </div>
            </div>
        </div>
    </div>
);
}

export default LandingPage