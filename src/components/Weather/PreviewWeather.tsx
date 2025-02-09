import { useCallback, useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BackgroundVideo, Temperature, Warning } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setWeatherData,
  setForecastData,
  setLocation,
} from '../../store/features';

const API_TOKEN = import.meta.env.VITE_OPENWEATHER_API_KEY;

const PreviewWeather = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const { city, latitude, longitude } = useSelector(
    (state: RootState) => state.location
  );
  const weather = useSelector((state: RootState) => state.weather.weatherData);

  const fetchWeatherData = useCallback(
    async (cityName: string) => {
      try {
        setError(null);

        const urls = [
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_TOKEN}&units=metric`,
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_TOKEN}&units=metric`,
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        if (responses.some(res => !res.ok))
          throw new Error('Ошибка загрузки данных');

        const [weatherData, forecastData] = await Promise.all(
          responses.map(res => res.json())
        );

        dispatch(setWeatherData({ weatherData }));
        dispatch(setForecastData({ forecastData }));

        localStorage.setItem('weather', JSON.stringify({ weatherData }));
        localStorage.setItem('forecast', JSON.stringify({ forecastData }));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const getUserLocation = async () => {
      if (!navigator.geolocation) {
        setError('Геолокация не поддерживается вашим браузером');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_TOKEN}&units=metric`
            );

            if (!response.ok)
              throw new Error('Ошибка определения местоположения');

            const data = await response.json();
            dispatch(setLocation({ city: data.name, latitude, longitude }));
            fetchWeatherData(data.name);
          } catch (err) {
            setError(
              err instanceof Error ? err.message : 'Ошибка загрузки геолокации'
            );
          }
        },
        () => setError('Не удалось определить местоположение')
      );
    };

    if (!city && !latitude && !longitude) getUserLocation();
  }, [city, latitude, longitude, dispatch, fetchWeatherData]);

  return (
    <section className='relative flex h-120 w-full flex-col items-center justify-center px-3'>
      <BackgroundVideo weatherGroup={weather?.weatherData.weather[0]?.main} />
      <div className='z-10'>
        {error && <Warning text={error} />}

        <div className='flex flex-col items-center text-4xl font-bold'>
          <span className='flex items-center gap-x-2'>
            <FaMapMarkerAlt
              className='text-[var(--title-dark)]'
              size={24}
            />
            <p className='text-3xl font-extrabold tracking-wide text-[var(--title-dark)]'>
              {city || 'Unknown'}
            </p>
          </span>

          <Temperature
            size='large'
            temperature={
              weather?.weatherData?.main?.temp
                ? Math.round(weather?.weatherData?.main?.temp)
                : undefined
            }
            feelsLikeTemperature={
              weather?.weatherData?.main?.feels_like
                ? Math.round(weather?.weatherData?.main?.feels_like)
                : undefined
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PreviewWeather;
