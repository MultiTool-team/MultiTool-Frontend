import { FaMapMarkerAlt } from 'react-icons/fa';
import { BackgroundVideo, Temperature, Warning } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetCurrentWeatherQuery } from './api/weatherApi';

const PreviewWeather = () => {
  const { lat, lon } = useSelector((state: RootState) => state.location);

  const POLLING_INTERVAL: number = 150000; // 2min 30sec

  const { data: weatherData, error: weatherError } = useGetCurrentWeatherQuery(
    { lat: lat, lon: lon },
    {
      pollingInterval: POLLING_INTERVAL,
    }
  );

  return (
    <section className='relative flex h-120 w-full flex-col items-center justify-center px-3'>
      {weatherError && (
        <Warning text='Ошибка загрузки данных. Возможно стоит проверить разрешение на геолокацию.' />
      )}

      <BackgroundVideo weatherGroup={weatherData?.weather[0]?.main} />
      <div className='z-10'>
        <div className='flex flex-col items-center text-4xl font-bold'>
          <span className='flex items-center gap-x-2'>
            <FaMapMarkerAlt
              className='text-[var(--title-dark)]'
              size={24}
            />
            <p className='text-3xl font-extrabold tracking-wide text-[var(--title-dark)]'>
              {weatherData?.name || 'Unknown'}
            </p>
          </span>
          <Temperature
            size='large'
            temperature={
              weatherData?.main?.temp
                ? Math.ceil(weatherData.main.temp)
                : undefined
            }
            feelsLikeTemperature={
              weatherData?.main?.feels_like
                ? Math.ceil(weatherData.main.feels_like)
                : undefined
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PreviewWeather;
