import { createContext, useState, useReducer } from "react";
import WeatherApiReducer from "./WeatherApiReducer";

const WeatherApiContext = createContext();

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;

export const WeatherApiProvider = ({ children }) => {
  const [data, setData] = useState(null);


  const initialState = {
    data: [data],
    loading: false,
  }

  const [state, dispatch] = useReducer(WeatherApiReducer, initialState);


  const fetchData = async () => {
    setLoading(false);

    const response = await fetch(`${WEATHER_URL}?q=szczecin&appid=${WEATHER_TOKEN}`);

    const json = await response.json();

    setData(json);
  }

  fetchData()
    .catch(console.error);


  const setLoading = () => {
    dispatch({type: 'SET_LOADING'});
  }


  return (
    <WeatherApiContext.Provider value={{
      data: state.data,
      loading: state.loading,
      fetchData,
      setLoading,
    }}>
      {children}
    </WeatherApiContext.Provider>
  )

}

export default WeatherApiContext;
