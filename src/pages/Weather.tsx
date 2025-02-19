import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../store/features';
import { SEO } from '../app/SEO';
import { PreviewWeather } from '../widgets/weather';
import { ForecastWeather } from '../widgets/weather/components';

const Weather: React.FC = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let watchId: number | null = null;

    const fetchUserLocation = async () => {
      try {
        const location = await getUserLocation();
        setCoords(location);
        dispatch(setLocation(location));
      } catch (error) {
        localStorage.clear();
        console.error('Ошибка при получении координат:', error);
      }
    };

    const startWatchingLocation = () => {
      if (!navigator.geolocation) {
        console.error('Geolocation не поддерживается браузером');
        return;
      }

      watchId = navigator.geolocation.watchPosition(
        position => {
          const newLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setCoords(newLocation);
          dispatch(setLocation(newLocation));
        },
        error => {
          console.error('Ошибка при отслеживании координат:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    };

    const stopWatchingLocation = () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
      }
    };

    // Инициализация получения координат
    fetchUserLocation();
    startWatchingLocation();

    // Очистка слежения при размонтировании компонента
    return () => {
      stopWatchingLocation();
    };
  }, [dispatch]);

  console.log(coords);

  return (
    <>
      <SEO
        title='Weather Forecast | MultiTool'
        description="Get real-time weather updates, forecasts, and insights with MultiTool's weather tracker."
        keywords='weather, forecast, temperature, MultiTool, real-time weather'
      />
      <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
        <PreviewWeather />
        <ForecastWeather />
      </div>
    </>
  );
};

export default Weather;

// Функция для получения текущей геолокации пользователя
const getUserLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation не поддерживается браузером'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      error => {
        reject(error);
      }
    );
  });
};
