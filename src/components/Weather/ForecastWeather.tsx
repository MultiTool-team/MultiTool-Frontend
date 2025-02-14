import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { WeatherView } from '..';
import { RootState } from '../../store/store';
import {
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
} from './api/weatherApi';
import { v4 as uuid } from 'uuid';

const ForecastWeather = () => {
  const lat = useSelector((state: RootState) => state.location.lat);
  const lon = useSelector((state: RootState) => state.location.lon);

  const {
    data: currentWeather,
    error: errorCurrent,
    refetch: getCurrentWeather,
  } = useGetCurrentWeatherQuery({ lat: lat, lon: lon });

  const {
    data: forecastWeather,
    error: errorForecast,
    refetch: getForecast,
  } = useGetForecastQuery({ lat: lat, lon: lon });

  // Автоматический запуск запросов при изменении координат
  useEffect(() => {
    if (lat && lon) {
      const fetchWeatherData = async () => {
        await getCurrentWeather();
        await getForecast();
      };
      fetchWeatherData();
    }
  }, [lat, lon, getCurrentWeather, getForecast]);

  // Безопасное получение данных
  const currentOpenWeatherIcon = currentWeather?.weather?.[0]?.icon;
  const currentTemperature = currentWeather?.main?.temp;
  const currentDescription = currentWeather?.weather?.[0]?.description;

  const iconURL =
    currentOpenWeatherIcon &&
    `https://openweathermap.org/img/wn/${currentOpenWeatherIcon}@2x.png`;

  const forecastOpenWeather = forecastWeather?.list?.slice(0, 7);

  return (
    <section className='bg flex w-full justify-between rounded-4xl px-8 py-4'>
      {/* Отображение текущей погоды */}
      {!errorForecast || !errorCurrent ? (
        <>
          <div className='w-1/2 border-r-1 border-[var(--text-light)] text-center dark:border-[var(--text-dark)]'>
            <p className='text-alt text-lg'>
              На сегодняшний день известно, <br />
              что на улице -{' '}
              <strong className='text-alt'>
                {currentDescription || 'Неизвестно'}
              </strong>
            </p>
            <hr className='mt-2 mb-6 border-[var(--text-light)] dark:border-[var(--text-dark)]' />
            {currentOpenWeatherIcon && currentTemperature && (
              <WeatherView
                title='Now'
                icon={iconURL}
                temperature={Math.ceil(currentTemperature)}
              />
            )}
          </div>

          {/* Отображение прогноза на неделю */}
          <div className='w-1/2 text-center'>
            <p className='text-alt text-lg'>
              А здесь представлен прогноз на ближайшие 5 дней. <br />
              Посмотрите, а мы вам предложим варианты одежды.
            </p>
            <hr className='mt-2 mb-6 border-[var(--text-light)] dark:border-[var(--text-dark)]' />
            {forecastOpenWeather ? (
              <div className='mx-12 flex flex-col items-center gap-4'>
                {forecastWeather?.list
                  ?.filter((_, index) => index % 8 === 0)
                  .slice(0, 7)
                  .map(forecastData => (
                    <WeatherView
                      key={forecastData.dt}
                      title={forecastData.dt_txt
                        .split(' ')[0]
                        .split('-')
                        .slice(1)
                        .join('-')}
                      icon={`https://openweathermap.org/img/wn/${forecastData.weather?.[0]?.icon}@2x.png`}
                      temperature={[
                        Math.ceil(forecastData.main.temp_min),
                        Math.ceil(forecastData.main.temp_max),
                      ]}
                    />
                  ))}
              </div>
            ) : (
              <p>Прогноз недоступен</p>
            )}
          </div>
        </>
      ) : (
        <h2 className='title mx-auto'>Проверьте интернет соединение</h2>
      )}
    </section>
  );
};

export default ForecastWeather;
