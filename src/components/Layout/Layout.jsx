import React, { useState, useEffect } from 'react';
import { WiCelsius, WiDayThunderstorm, WiDayRainMix, WiDaySnow, WiFog, WiDaySunny, WiCloud} from 'react-icons/wi';
import Spinner from '../shared/Spinner';
import FeelsLike from './CardsItems/FeelsLike';
import Humidity from './CardsItems/Humidity';
import Pressure from './CardsItems/Pressure';
import TempMax from './CardsItems/TempMax';
import TempMin from './CardsItems/TempMin';
import Wind from './CardsItems/Wind';

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;

function Layout() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {

      const response = await fetch(`${WEATHER_URL}?q=szczecin&appid=${WEATHER_TOKEN}`);

      const json = await response.json();
  
      setData(json);
      setLoading(true)
    }

    fetchData()
      .catch(console.error);
  }, [])

  if(data === null) return
  if(!loading) return <Spinner />

  const {
    name,
    main: {
      feels_like,
      humidity,
      pressure,
      temp,
      temp_max,
      temp_min,
    },
    sys: {
      country,
    },
    weather: {
      [0]: {
        description,
        icon,
        id,
        main,
      },
    },
    wind: {
      speed,
    },
  } = data;

  console.log(data)

  const celciousFeels_like = (feels_like - 273.15).toFixed(0).toString();
  const celciousTemp = (temp - 273.15).toFixed(0).toString();
  const celciousTemp_Max = (temp_max - 273.15).toFixed(0).toString();
  const celciousTemp_Min = (temp_min - 273.15).toFixed(0).toString();

  const icons = (id) => {
    if(id >= 200 && id <= 232) {
      return  <WiDayThunderstorm className='w-25 h-25 primary' />
    } else if(id >= 300 && id <= 321) {
      return  <WiDayRainMix className='w-25 h-25 text-info' />
    } else if(id >= 500 && id <= 531) {
      return  <WiDayRainMix className='w-25 h-25 text-info' />
    } else if(id >= 600 && id <= 621) {
      return  <WiDaySnow className='w-25 h-25 text-light' />
    } else if(id >= 701 && id <= 781) {
      return  <WiFog className='w-25 h-25 text-secondary' />
    } else if(id === 800) {
      return  <WiDaySunny className='w-25 h-25 text-warning' />
    } else if(id >= 801 && id <= 804) {
      return  <WiCloud className='w-25 h-25 text-info' />
    }
  }

  return (
    <div className="container mb-5 mb-md-0 mb-lg-0">
      <div className='card text-center'>
        <div className="container mt-5">
          <h2 className="card-title mt-2 fs-1 fw-bold">{name}, {country}<span></span></h2>
          <figure className='card-image' on>
            {icons(id)}
          </figure>
          <h3 className="card-text fw-bold">{celciousTemp} <WiCelsius className='fs-1' /></h3>
          <div className="card-body">
            <div className="card-text fs-3 fw-bold">{main}: {description}</div>
          </div>
        </div>
      </div>
      <div className="row row-cols-2 mt-2 mt-md-0 mt-lg-0 mx-auto">
        <FeelsLike feelsLike={celciousFeels_like}/>
        <TempMax tempMax={celciousTemp_Max}/>
        <TempMin tempMin={celciousTemp_Min}/>
        <Humidity humidity={humidity}/>
        <Pressure pressure={pressure}/>
        <Wind wind={speed}/>
      </div>
    </div> 
  )
}

export default Layout
