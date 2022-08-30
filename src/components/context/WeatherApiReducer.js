const WeatherApiReducer = (state, action) => {
  switch(action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        weather: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default WeatherApiReducer;