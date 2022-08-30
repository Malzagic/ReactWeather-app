import React, { useEffect, useContext } from 'react';
import WeatherApiContext from './context/WeatherApiContext';
import Spinner from './Spinner';
import "bootswatch/dist/morph/bootstrap.min.css";

function Location() {

  const {getWeather, loading} = useContext(WeatherApiContext);

  useEffect(() => {
    getWeather('szczecin')
  }, []);


  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card w-50">
            <h2 className="card-title text-center py-2">Location</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Location
