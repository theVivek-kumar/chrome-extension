
import { useState } from 'react';
import './App.css';
// import Clock from './Components/Clock/Clock';
// import Weather from './Components/Weather';
import Home from './Components/home';

function App() {
  const [name, setName] = useState()

  
  function setusename() {
    setName( )
    
  }
  return (

      <div className='App'>
      <div style= {{backgroundImage: `url("https://picsum.photos/1600/1000?random")`,
  backgroundRepeat: 'no-repeat',
  width:'100%',
        height: '100vh',
      }}>
        <div className='wrapper-continer'>
          <h2 className='heading--1'>Hello, What's your good name ,{name}</h2>
          <Home/>
        <div className='input-text-container'><input className='input-name-section' type="text" onChange={(e) => setName(e.target.value)}
        value={name} /></div>
        <div> <button onClick={setusename} className='input-text-container btn'> Continue </button></div>
        </div>
        
        </div>
        </div>
    
  );
}

export default App;
