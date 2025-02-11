import { useSelector } from 'react-redux';
import { WeatherView } from '..';
import { RootState } from '../../store/store';
import {
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
} from './api/weatherApi';

const DailyWeather = () => {
  const {
    data: currentWeather,
    isLoading: isLoadingCurrent,
    error: errorCurrent,
  } = useGetCurrentWeatherQuery(
    useSelector((state: RootState) => state.location.city)
  );

  const {
    data: forecastWeather,
    isLoading: isLoadingForecast,
    error: errorForecast,
  } = useGetForecastQuery(
    useSelector((state: RootState) => state.location.city)
  );

  if (isLoadingCurrent || isLoadingForecast) return <div>Загрузка...</div>;
  if (errorCurrent || errorForecast) return <div>Ошибка загрузки данных</div>;

  const currentOpenWeatherIcon = currentWeather?.weather[0].icon;
  const currentTemperature = currentWeather?.main.temp;
  const iconURL = `https://openweathermap.org/img/wn/${currentOpenWeatherIcon}@2x.png`;
  //TODO: Change GET URL to forecast 7 days
  const forecastOpenWeather = forecastWeather?.list.slice(0, 7);
  console.log('aDEBUG FORECAST', forecastOpenWeather);
  return (
    <section className='bg text-alt flex h-120 w-full items-center justify-between rounded-4xl px-8 py-4'>
      <div className='text-center'>
        <p className='text-alt'>
          На сегодняшний день известно, <br /> что на улице -{' '}
          <strong className='text-alt'>
            {currentWeather?.weather[0]?.description}
          </strong>
        </p>
        <hr className='text-alt mt-2 mb-6' />
        <WeatherView
          title='Now'
          icon={iconURL}
          temperature={Math.ceil(currentTemperature)}
        />
      </div>
      <div className='text-center'>
        <p className='text-alt'>
          А здесь представлен прогноз на неделю. <br />
          Посмотрите, а мы вам предложим варианты одежды.
        </p>
        <hr className='text-alt mt-2 mb-6' />
        {forecastOpenWeather && (
          <div className='flex w-full items-center gap-12'>
            {forecastOpenWeather.map(forecastData => (
              <WeatherView
                key={forecastData.dt}
                title={forecastData.dt_txt
                  .split(' ')[0]
                  .split('-')
                  .slice(1)
                  .join('-')}
                icon={`https://openweathermap.org/img/wn/${currentOpenWeatherIcon}@2x.png`}
                temperature={Math.ceil(forecastData.main.temp)}
              />
            ))}
          </div>
        )}
      </div>
      <p></p>
    </section>
  );
};

export default DailyWeather;
