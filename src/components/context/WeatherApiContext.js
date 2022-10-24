import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import WeatherApiReducer from './WeatherApiReducer';

const WeatherApiContext = createContext();

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_TOKEN;


export const WeatherApiProvider = ({ children }) => {
  const initialState = {
    data: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(WeatherApiReducer, initialState);

  const fetchData = async (cityName) => {

    if(cityName === '' || cityName === null || cityName === undefined) return toast.error('Please type location');

    const response = await fetch(`${WEATHER_URL}?q=${cityName}&appid=${WEATHER_TOKEN}`);
    if(response.status === 404) {
      setLoading(false);
      return toast.error('Bad city name!');
    }
    const data = await response.json();

    dispatch({
      type: 'GET_WEATHER',
      payload: data,
    });
    if(response.status === 200) return setLoading(true);
  }

  const startData = async (lat, lon) => {
    const response = await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_TOKEN}`);
    if(response.status === 404) return;
    const data = await response.json();

    dispatch({
      type: 'GET_WEATHER',
      payload: data,
    });
    setLoading(true);
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
      startData,
      setLoading,
    }}>
      {children}
    </WeatherApiContext.Provider>
  )

}

export default WeatherApiContext;
