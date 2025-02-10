import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IWeatherData {
  weatherData: {
    coord: {
      lon: number;
      lat: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    rain: {
      string: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}

interface IWeatherState {
  weatherData: IWeatherData | null;
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
    setWeatherData: (state, action: PayloadAction<IWeatherState>) => {
      state.weatherData = action.payload.weatherData;
      localStorage.setItem('weather', JSON.stringify(state));
    },
    setForecastData: (state, action: PayloadAction<IWeatherState>) => {
      state.forecastData = action.payload.forecastData;
      localStorage.setItem('forecast', JSON.stringify(state));
    },
  },
});

export const { setWeatherData, setForecastData } = weatherSlice.actions;
export default weatherSlice.reducer;
