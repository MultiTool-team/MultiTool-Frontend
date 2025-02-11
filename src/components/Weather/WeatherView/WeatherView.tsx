import { Temperature } from '../../';

interface IWeatherView {
  title: string;
  icon: string;
  temperature: number | number[] | undefined;
}

const ForecastWeather: React.FC<IWeatherView> = ({
  title,
  icon,
  temperature,
}) => {
  return (
    <div
      className={`flex ${typeof temperature === 'number' ? 'flex-col gap-4' : 'justify-between'} bg-alt inline-flex items-center rounded-4xl px-3 py-2`}
    >
      <h2 className='text'>{title}</h2>
      {/* TODO change alt content; 
	  it should be with more accessible  */}
      <img
        src={icon}
        alt='weather icon'
        className='text mx-auto'
        width={48}
        height={48}
      />
      {typeof temperature === 'number' ? (
        <Temperature
          size='small'
          temperature={temperature}
        />
      ) : (
        <div className='flex items-center justify-between'>
          <Temperature
            size='small'
            temperature={temperature[0]}
          />

          <Temperature
            size='small'
            temperature={temperature[1]}
          />
        </div>
      )}
      {/* <Temperature size='medium'/> */}
    </div>
  );
};

export default ForecastWeather;
