import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IWeatherState {
  weatherData: any | null;
  forecastData: any | null;
}

const loadWeatherFromStorage = (): IWeatherState => {
	const storedDataWeather = localStorage.getItem('weather');
	const storedDataForecast = localStorage.getItem('forecast');
  
	return storedDataWeather && storedDataForecast
	  ? {
		  weatherData: JSON.parse(storedDataWeather),
		  forecastData: JSON.parse(storedDataForecast),
		}
	  : { weatherData: null, forecastData: null };
  };
  

const initialState: IWeatherState = loadWeatherFromStorage();

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.weatherData = action.payload.weatherData;
      localStorage.setItem('weather', JSON.stringify(state));
    },
    setForecastData: (state, action: PayloadAction<any>) => {
      state.forecastData = action.payload.forecastData;
      localStorage.setItem('forecast', JSON.stringify(state));
    },
  },
});

export const { setWeatherData, setForecastData } = weatherSlice.actions;
export default weatherSlice.reducer;