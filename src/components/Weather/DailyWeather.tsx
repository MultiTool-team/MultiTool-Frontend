import { useSelector } from 'react-redux';
import { WeatherView } from '..';
import { RootState } from '../../store/store';
import { useGetCurrentWeatherQuery } from './api/weatherApi';

const DailyWeather = () => {
  const props1 = {
    title: 'now',
    icon: '',
    temperature: 12,
  };

  const props2 = {
    title: 'yes',
    icon: '',
    temperature: [12, 24],
  };

  const {
    data: currentWeather,
    isLoading,
    error,
  } = useGetCurrentWeatherQuery(
    useSelector((state: RootState) => state.location.city)
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  //   const currentOpenWeatherIcon =
  //     weatherSelector?.weatherData?.weatherData.weather[0].icon;
  //TODO: Change GET URL to forecast 7 days
  //   const iconURL = `https://openweathermap.org/img/wn/${currentOpenWeatherIcon}@2x.png`;
  return (
    <section className='bg text-alt flex h-120 w-full items-center justify-between rounded-4xl px-8 py-4'>
      <div>
        На сегодняшний день известно, что на улице -{' '}
        {currentWeather?.weather[0]?.description}
        <hr />
        <WeatherView {...props1} />
      </div>
      <p>
        <WeatherView {...props2} />
      </p>
      <p></p>
    </section>
  );
};

export default DailyWeather;
