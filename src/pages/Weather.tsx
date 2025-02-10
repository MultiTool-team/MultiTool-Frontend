import React from 'react';
import { DailyWeather, PreviewWeather, SEO } from '../components';
// import GeoLocation from './GeoLocation.tsx';

const Weather: React.FC = () => {
  return (
    <>
      <SEO
        title='Weather Forecast | MultiTool'
        description="Get real-time weather updates, forecasts, and insights with MultiTool's weather tracker."
        keywords='weather, forecast, temperature, MultiTool, real-time weather'
      />
      <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
        <PreviewWeather />
        <DailyWeather />
      </div>
    </>
  );
};

export default Weather;
