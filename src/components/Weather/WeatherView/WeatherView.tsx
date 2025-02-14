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
      className={`flex ${typeof temperature === 'number' ? 'flex-col gap-4' : 'w-full max-w-md gap-24'} bg-alt inline-flex items-center rounded-4xl px-4 py-2`}
    >
      <h2
        className={`text ${typeof temperature === 'number' ? '' : 'w-[45%] text-left'}`}
      >
        {title}
      </h2>
      {/* TODO change alt content; 
	  it should be with more accessible  */}
      <img
        src={icon}
        alt='weather icon'
        className='text mx-auto rounded-4xl bg-[var(--bg-light)]/90'
        width={48}
        height={48}
      />
      {typeof temperature === 'number' ? (
        <Temperature
          size='small'
          temperature={temperature}
        />
      ) : (
        <div className='flex w-full items-center justify-between'>
          <div className='flex flex-col'>
            <h3 className='text'>from:</h3>
            <Temperature
              size='small'
              temperature={temperature[0]}
            />
          </div>

          <hr className='text w-full border-[1.5px] border-transparent' />
          <div className='flex flex-col'>
            <h3 className='text'>to:</h3>
            <Temperature
              size='small'
              temperature={temperature[1]}
            />
          </div>
        </div>
      )}
      {/* <Temperature size='medium'/> */}
    </div>
  );
};

export default ForecastWeather;
