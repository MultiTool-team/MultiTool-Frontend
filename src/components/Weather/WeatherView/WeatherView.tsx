import { useSelector } from 'react-redux';
import { Temperature } from '../../';
import { RootState } from '../../../store/store';

interface IWeatherView {
  title: string;
  icon: string;
  temperature: number | number[];
}

const WeatherView: React.FC<IWeatherView> = ({ title, icon, temperature }) => {
  const weatherSelector = useSelector((state: RootState) => state.weather);
  console.log(
    'Debug',
    weatherSelector?.weatherData?.weatherData.weather[0].icon
  );

  const currentOpenWeatherIcon =
    weatherSelector?.weatherData?.weatherData.weather[0].icon;
	//TODO: Change GET URL to forecast 7 days
  const iconURL = `https://openweathermap.org/img/wn/${currentOpenWeatherIcon}@2x.png`;

  return (
    <div
      className={`flex ${typeof temperature === 'number' ? 'flex-col gap-4' : 'justify-between'} items-center`}
    >
      <h2>{title}</h2>
      {/* TODO change alt content; 
	  it should be with more accessible  */}
      <img
        src={iconURL}
        alt='weather icon'
        width={48}
        height={48}
      />
      {typeof temperature === 'number' ? (
        <Temperature
          size='small'
          temperature={temperature}
          classNameTemperatureColor='text-alt'
        />
      ) : (
        <div className='flex items-center justify-between'>
          <Temperature
            size='small'
            temperature={temperature[0]}
            classNameTemperatureColor='text-alt'
          />

          <Temperature
            size='small'
            temperature={temperature[1]}
            classNameTemperatureColor='text-alt'
          />
        </div>
      )}
      {/* <Temperature size='medium'/> */}
    </div>
  );
};

export default WeatherView;
