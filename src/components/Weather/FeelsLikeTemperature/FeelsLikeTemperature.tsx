import { ComponentSizes } from '../Temperature/Temperature';

const feelsLikeSize: Record<ComponentSizes, string> = {
  small: 'text-xl',
  medium: 'text-2xl',
  large: 'text-4xl',
};
interface IFeelsLikeTemperature {
  size?: ComponentSizes;
  feelsLikeTemperature?: number;
  className?: string;
}

const FeelsLikeTemperature: React.FC<IFeelsLikeTemperature> = ({
  size,
  feelsLikeTemperature,
  className,
}) => {
  return (
    <div className='group flex justify-center py-5'>
      <h3
        className={`text ${feelsLikeSize[size ?? 'medium']} ${className ? className : ''}`}
      >
        Feels like:{' '}
        <span className={`text sm:px-2 ${className ? className : ''}`}>
          {feelsLikeTemperature ?? 'unknown'}&deg;
        </span>
      </h3>
    </div>
  );
};

export default FeelsLikeTemperature;
