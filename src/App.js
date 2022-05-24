import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './page/LandingPage'
import Home from './page/home';
import MainArea from './page/MainArea';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<MainArea />} />
      </Routes> 
  </div>
    
  );
}

export default App;
