// weatherApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const WEATHER_API_TOKEN = import.meta.env.VITE_OPENWEATHER_API_KEY;

//#region Типы для текущей погоды (Current Weather)
export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
//#endregion

//#region Типы для прогноза (Forecast)
export interface ForecastMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
  temp_kf: number;
}

export interface ForecastListItem {
  dt: number;
  main: ForecastMain;
  weather: Weather[];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  visibility?: number;
  pop?: number; // Probability of precipitation
  sys: { pod: string };
  dt_txt: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastListItem[];
  city: City;
}
//#endregion

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<CurrentWeatherResponse, string>({
      query: (city: string) =>
        `weather?q=${city}&appid=${WEATHER_API_TOKEN}&units=metric&lang=ru`,
    }),
    getForecast: builder.query<ForecastResponse, string>({
      query: (city: string) =>
        `forecast?q=${city}&appid=${WEATHER_API_TOKEN}&units=metric`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = weatherApi;
