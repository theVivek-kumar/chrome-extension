import { React, useState , useEffect} from 'react'
import axios from 'axios'

function Weather() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [ display , setDisplay ] = useState("inline")

  const mycity = localStorage.getItem('myCity')

  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + mycity + "&appid=" + apiKey
    axios.get(apiURL)
    .then((res) => {
      console.log("response", res.data) 
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)


    setInputCity(e.target.value)
}

const handleSearch = () => {
    getWetherDetails(mycity)
    localStorage.setItem('myCity', inputCity)
    setDisplay("none")
  }

  useEffect(()=>{getWetherDetails(mycity)},[])

  return (
    <div className="weather-container">

    { !mycity &&

        <div className="weather-input" style={{display:display}}>
        <p className=''>What is your current location</p>
          <input type="text" className="input-container "
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
    }


      {Object.keys(data).length > 0 &&

          <div className="weather-input">

            <p className="weatherTemp"> {((data?.main?.temp) - 273.15).toFixed(1)}°C</p>
            <p className="weatherCity">
              {data?.name}
            </p>
          </div>
      }

    </div>
  );
}

export default Weather 