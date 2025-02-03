import Temperature from './Temperature';

const PreviewWeather = () => {
  return (
    <div>
      <Temperature
        size='large'
        temperature={5}
        feelsLikeTemperature={2}
      />
    </div>
  );
};

export default PreviewWeather;
