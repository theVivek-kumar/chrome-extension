import { React, useState , useEffect} from 'react'


function Weather() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity,setInputCity] = useState("")
  const [data, setData] = useState({})
  const [ display , setDisplay ] = useState("inline")

  const mycity = localStorage.getItem('myCity')

  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + mycity + "&appid=" + apiKey
    fetch(apiURL)
    .then((res)=>res.json())
    .then((data) => {
      console.log(data) 
      setData(data)
    }).catch((err) => {
     
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


  useEffect(() => {
    getWetherDetails(mycity)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
  return (
    <div className="weather-container-top-right">

    { !mycity &&

        <div className="weather-input" style={{ display: display }}>
          <p className='location-heading'>What is your current location</p>
           <div className='weather-input-search'> 
          <input type="text" className="input-container "
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
            >Search</button>
            </div>
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