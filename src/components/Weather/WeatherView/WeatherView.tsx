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
      className={`flex ${typeof temperature === 'number' ? 'flex-col gap-4' : 'w-full max-w-md gap-4'} bg-alt inline-flex items-center rounded-4xl px-4 py-2`}
    >
      <h2
        className={`text ${typeof temperature === 'number' ? '' : 'w-[45%] text-left'}`}
        aria-label={title}
      >
        {title}
      </h2>

      {/* Weather Icon with Accessible Alt Text */}
      <img
        src={icon}
        alt={`${title} weather icon`}
        className='mx-auto rounded-4xl bg-[var(--bg-light)]/90'
        width={48}
        height={48}
      />

      {typeof temperature === 'number' ? (
        <Temperature
          size='small'
          temperature={temperature}
          classNameTemperatureColor='text'
        />
      ) : (
        <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col items-center'>
            <h3 className='text text-sm'>From:</h3>
            <Temperature
              size='small'
              temperature={temperature[0]}
              classNameTemperatureColor='text'
            />
          </div>
          <hr className='relative top-3 mx-2 my-2 w-full border-[1.3px] border-dashed border-gray-400 opacity-40' />
          <div className='flex flex-col items-center'>
            <h3 className='text text-sm'>To:</h3>
            <Temperature
              size='small'
              temperature={temperature[1]}
              classNameTemperatureColor='text'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastWeather;
