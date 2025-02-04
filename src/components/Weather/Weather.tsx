import React from 'react';
import { SEO } from '..';
// import GeoLocation from './GeoLocation.tsx';
import PreviewWeather from './PreviewWeather';

const Weather: React.FC = () => {
  return (
    <div>
      <SEO title='Weather' />
      <PreviewWeather />
    </div>
  );
};

export default Weather;

// TO-DO: Write documentation
