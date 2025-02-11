import FeelsLikeTemperature from '../FeelsLikeTemperature/FeelsLikeTemperature';

// temporary store the data here. Move the props data to another file later.
export interface TemperatureData {
  size?: ComponentSizes;
  temperature?: number;
  feelsLikeTemperature?: number;
  classNameTemperatureColor?: string;
}

export type ComponentSizes = 'small' | 'medium' | 'large';
const Temperature: React.FC<TemperatureData> = ({
  size = 'medium',
  temperature,
  feelsLikeTemperature,
  classNameTemperatureColor,
}) => {
  // store key-value pairs for sizes
  const sizes: Record<ComponentSizes, string> = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-9xl',
  };

  return (
    <div className='mx-auto'>
      <div className='temperature flex justify-center'>
        <h2
          className={`${classNameTemperatureColor ? classNameTemperatureColor : 'text'} text-center ${sizes[size ?? 'medium']} `}
        >
          {temperature ?? 'unknown'}&deg;
        </h2>
      </div>
      {feelsLikeTemperature && (
        <FeelsLikeTemperature feelsLikeTemperature={feelsLikeTemperature} />
      )}
    </div>
  );
};

export default Temperature;
