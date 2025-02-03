import { useGeolocated } from 'react-geolocated';
import { useEffect, useState } from 'react';
import getWeatherByCoords from '../../api/GetWeather.ts';

const GeoLocation = () => {
  const [lat, setLat] = useState<number>(55);
  const [lon, setLon] = useState<number>(37);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  if (!isGeolocationAvailable) {
    alert('Your browser does not support Geolocation');
  }
  if (!isGeolocationEnabled) {
    alert('Geolocation is not enabled');
  }

  useEffect(() => {
    if (coords?.latitude && coords?.longitude) {
      setLat(coords.latitude);
      setLon(coords.longitude);
    }

    const weather = getWeatherByCoords(lon, lat);
    console.log(weather);
    console.log(weather['data']); // undefined here, lexa razebi ego
  }, []);
  return (
    <div>
      <input type='text' />
      {<div>Long: {lon}</div>}
      {<div>Lat: {lat}</div>}
    </div>
  );
};

export default GeoLocation;
