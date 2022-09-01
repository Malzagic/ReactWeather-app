import { createContext, useReducer } from "react";
import WeatherApiReducer from './WeatherApiReducer'

const WeatherApiContext = createContext();

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;

export const WeatherApiProvider = ({ children }) => {
  const initialState = {
    data: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(WeatherApiReducer, initialState);


  const fetchData = async (location) => {
    setLoading();

    if(location === null) return location = 'szczecin';

    const response = await fetch(`${WEATHER_URL}?q=${location}&appid=${WEATHER_TOKEN}`);

    const data = await response.json();

    // console.log(data)

    dispatch({
      type: 'GET_WEATHER',
      payload: data,
    });
  }

  // Set loading
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
