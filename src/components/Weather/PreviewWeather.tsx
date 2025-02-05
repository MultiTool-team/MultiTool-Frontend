import { useCallback, useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Temperature, Warning } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../features/locationSlice';
import { setWeatherData, setForecastData } from '../../features/weatherSlice';
import { RootState } from '../../store/store';
import BackgroundVideo from './BackgroundVideo';

const DA_POEBAT_MNE_API_TOKEN = 'b3071ec989aef18fa9569ff8e6ddde90';

const PreviewWeather = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const { city } = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather.weatherData);

  const fetchWeatherData = useCallback(
    async (cityName: string) => {
      try {
        setError(null);

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${DA_POEBAT_MNE_API_TOKEN}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${DA_POEBAT_MNE_API_TOKEN}&units=metric`;

        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(currentWeatherUrl),
          fetch(forecastUrl),
        ]);

        if (!weatherResponse.ok) throw new Error('Город не найден');
        if (!forecastResponse.ok)
          throw new Error('Не удалось получить прогноз');

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        dispatch(setWeatherData({ weatherData }));
        localStorage.setItem('weather', JSON.stringify({ weatherData }));

        dispatch(setForecastData({ forecastData }));
        localStorage.setItem('forecast', JSON.stringify({ forecastData }));
      } catch (err) {
        if (err instanceof Error) setError(err.message);
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
        async position => {
          const { latitude, longitude } = position.coords;
          const reverseGeocodeUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${DA_POEBAT_MNE_API_TOKEN}&units=metric`;

          try {
            const response = await fetch(reverseGeocodeUrl);
            if (!response.ok)
              throw new Error('Ошибка определения местоположения');
            const data = await response.json();

            dispatch(setLocation({ city: data.name, latitude, longitude }));

            fetchWeatherData(data.name);
          } catch (err) {
            if (err instanceof Error) setError(err.message);
          }
        },
        () => {
          setError('Не удалось определить местоположение');
        }
      );
    };

    getUserLocation();
  }, [dispatch, fetchWeatherData]);

  return (
    <section className='relative flex h-120 flex-col items-center justify-center px-3'>
      <BackgroundVideo weatherGroup={weather.weather[0].main} />
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

          {weather ? (
            <Temperature
              size='large'
              temperature={Math.round(weather.main.temp)}
              feelsLikeTemperature={Math.round(weather.main.feels_like)}
            />
          ) : (
            <Temperature
              size='large'
              temperature={undefined}
              feelsLikeTemperature={undefined}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PreviewWeather;
