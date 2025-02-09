import { Temperature } from '../../';

interface IWeatherView {
  title: string;
  icon: string;
  temperature: number | number[];
}

const WeatherView: React.FC<IWeatherView> = ({ title, icon, temperature }) => {
  return (
    <div
      className={`flex ${typeof temperature === 'number' ? 'flex-col gap-4' : 'justify-between'} items-center`}
    >
      <h2>{title}</h2>
      {/* TODO change alt content; 
	  it should be with more accessible  */}
      <img
        src={icon}
        alt='weather icon'
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
