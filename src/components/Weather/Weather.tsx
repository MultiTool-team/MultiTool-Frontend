import React from 'react';
import { SEO } from '..';
import GeoLocation from './GeoLocation.tsx';

const Weather: React.FC = () => {
  return (
    <div>
      <SEO title='Weather' />
      <GeoLocation/>
      {/*<div className='comingSoon'>*/}
      {/*  <div>*/}
      {/*    <h1 className='comingSoonText text text-center text-3xl sm:text-5xl md:text-7xl xl:text-9xl'>*/}
      {/*     */}
      {/*    </h1>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Weather;

// TO-DO: Write documentation
