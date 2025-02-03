import React from 'react';
import { SEO } from '..';
import TemperatureComponent from './TemperatureComponent';

const Weather: React.FC = () => {
  return (
    <div>
      <SEO title='Weather' />
      <TemperatureComponent
        size='large'
        temperature={5}
        optional={true}
      />
      {/*
      <div className='comingSoon'>
        <div>
          <h1 className='comingSoonText text text-center text-3xl sm:text-5xl md:text-7xl xl:text-9xl'>
            Coming Soon
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Weather;

// TO-DO: Write documentation
