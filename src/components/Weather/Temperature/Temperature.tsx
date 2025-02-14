import FeelsLikeTemperature from '../FeelsLikeTemperature/FeelsLikeTemperature';

// Temporary store the data here. Move the props data to another file later.
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
  // Store key-value pairs for sizes
  const sizes: Record<ComponentSizes, string> = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-9xl',
  };

  return (
    <div className='mx-auto'>
      <div className='temperature flex justify-center'>
        <h2
          className={`${classNameTemperatureColor || 'text'} text-center ${sizes[size]} font-bold`}
          aria-label={`Current temperature: ${temperature ?? 'unknown'}°`}
        >
          {temperature ?? 'unknown'}&deg;
        </h2>
      </div>
      {feelsLikeTemperature && (
        <FeelsLikeTemperature
          feelsLikeTemperature={feelsLikeTemperature}
          className='mt-2'
        />
      )}
    </div>
  );
};

export default Temperature;
