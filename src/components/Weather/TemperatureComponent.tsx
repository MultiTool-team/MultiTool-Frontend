// temporary store the data here. Move the props data to another file later.
interface TemperatureData {
  size: string;
  temperature: number;
  optional: boolean;
}

const TemperatureComponent: React.FC<TemperatureData> = ({
  size,
  temperature,
  optional,
}) => {
  // store key-value pairs for sizes
  interface SizesObject {
    [key: string]: string;
  }

  const sizes: SizesObject = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-9xl',
  };

  const feelsLikeSize: SizesObject = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-7xl',
  };
  return (
    <div className='temperatureSection mx-auto w-1/2'>
      <div className='temperature flex justify-center'>
        <span className={`text text-center ${sizes[size]}`}>{temperature}</span>
        <span className={`text ${sizes[size]}`}>&deg;</span>
      </div>
      {optional ? (
        <div className='feelsLike flex justify-center py-5'>
          <span className={`text-alt ${feelsLikeSize[size]}`}>
            Feels like: <span className='sm:px-2'>{temperature}</span>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default TemperatureComponent;
