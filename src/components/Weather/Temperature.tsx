// temporary store the data here. Move the props data to another file later.
interface TemperatureData {
  size: ComponentSizes;
  temperature: number | undefined;
  feelsLikeTemperature: number | undefined;
}

type ComponentSizes = 'small' | 'medium' | 'large';
const Temperature: React.FC<TemperatureData> = ({
  size,
  temperature,
  feelsLikeTemperature,
}) => {
  // store key-value pairs for sizes
  const sizes: Record<ComponentSizes, string> = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-9xl',
  };

  const feelsLikeSize: Record<ComponentSizes, string> = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
  };
  return (
    <div className='temperatureSection mx-auto'>
      <div className='temperature flex justify-center'>
        <h2 className={`text text-center ${sizes[size]}`}>
          {temperature ? <>{temperature}</> : 'unknown'}&deg;
        </h2>
      </div>
      {feelsLikeTemperature ? (
        <div className='group flex justify-center py-5'>
          <h3 className={`text ${feelsLikeSize[size]} `}>
            Feels like:{' '}
            <span className='sm:px-2'>{feelsLikeTemperature}&deg;</span>
          </h3>
        </div>
      ) : (
        <div className='group flex justify-center py-5'>
          <h3 className={`text-[var(--title-dark)] select-none  ${feelsLikeSize[size]} `}>
            Feels like: <span className='sm:px-2'>unknown &deg;</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Temperature;
