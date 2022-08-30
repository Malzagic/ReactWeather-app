import { createContext, useReducer } from "react";
import WeatherApiReducer from "./WeatherApiReducer";

const WeatherApiContext = createContext();

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;

export const WeatherApiProvider = ({ children }) => {
  const initialState = {
    weather: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(WeatherApiReducer, initialState);


  // Get search results
  const getWeather =  async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text
    });
  

    const response = await fetch(`${WEATHER_URL}?${params}&appid=${WEATHER_TOKEN}`);

    const {main} = await response.json();
    console.log(main)

    dispatch({
      type: 'GET_WEATHER',
      payload: main,
    });
  }


  const setLoading = () => {
    dispatch({type: 'SET_LOADING'});
  }


  return (
    <WeatherApiContext.Provider value={{
      weather: state.weather,
      loading: state.loading,
      getWeather,
      setLoading,
    }}>
      {children}
    </WeatherApiContext.Provider>
  )

}

export default WeatherApiContext;
