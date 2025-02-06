import React from 'react';
import { PreviewWeather, SEO } from '..';
// import GeoLocation from './GeoLocation.tsx';

const Weather: React.FC = () => {
  return (
    <>
      <SEO
        title='Weather Forecast | MultiTool'
        description="Get real-time weather updates, forecasts, and insights with MultiTool's weather tracker."
        keywords='weather, forecast, temperature, MultiTool, real-time weather'
      />
      <PreviewWeather />
    </>
  );
};

export default Weather;
