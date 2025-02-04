import { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Temperature, Warning } from '..';
import BackgroundVideo from './BackgroundVideo';

interface WeatherData {
  name: string;
  main: {
    temp: number | undefined;
    feels_like: number | undefined;

    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

// Defining types for forecast data
interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

const PreviewWeather = () => {
  const DA_POEBAT_MNE_API_TOKEN: string = 'b3071ec989aef18fa9569ff8e6ddde90';
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchWeatherData = async (cityName: string) => {
    const apiKey = DA_POEBAT_MNE_API_TOKEN;
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; // API URL for current weather
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`; // API URL for 3-day forecast

    try {
      setLoading(true);
      setError(null);

      const weatherResponse = await fetch(currentWeatherUrl);
      if (!weatherResponse.ok) {
        throw new Error('Город не найден');
      }
      const weatherData: WeatherData = await weatherResponse.json();
      setWeatherData(weatherData);
      console.log(weatherData);

      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) {
        throw new Error('Unable to fetch forecast data');
      }
      const forecastData: ForecastData = await forecastResponse.json();
      setForecastData(forecastData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async position => {
            const { latitude, longitude } = position.coords;
            const apiKey = DA_POEBAT_MNE_API_TOKEN;
            const reverseGeocodeUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            try {
              setLoading(true);
              const response = await fetch(reverseGeocodeUrl);
              if (!response.ok) {
                throw new Error('Unable to fetch location data');
              }
              const data: WeatherData = await response.json();
              setWeatherData(data);
              setCity(data.name);
              await fetchWeatherData(data.name);
            } catch (error) {
              if (error instanceof Error) {
                setError(error.message);
              }
              setWeatherData(null);
              setForecastData(null);
            } finally {
              setLoading(false);
            }
          },
          () => {
            setError('Не получилось определить ваше местоположение');
            setWeatherData(null);
            setForecastData(null);
          }
        );
      } else {
        setError('Определение геолокации не поддерживается вашим бразуером');
        setWeatherData(null);
        setForecastData(null);
      }
    };

    getUserLocation();
  }, []);
  return (
    <>
      <section className='relative flex h-120 flex-col items-center justify-center px-3'>
        {/*<BackgroundVideo weatherGroup={weatherData?.weather[0].main} /> */}
        {<BackgroundVideo weatherGroup='Clouds' />}
        <div>
          {error && <Warning text={error} />}

          <div>
            <div className='flex flex-col items-center text-4xl font-bold'>
              <span className='flex items-center gap-x-2'>
                <FaMapMarkerAlt
                  className='text'
                  size={24}
                />
                <p className='text'>{weatherData?.name || 'Unknown'}</p>
              </span>

              {/* <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt='weather icon'
                  />{' '} */}
              <Temperature
                size='large'
                temperature={Math.round(weatherData?.main.temp)}
                feelsLikeTemperature={Math.round(weatherData?.main.feels_like)}
              />
            </div>
          </div>
        </div>
      </section>{' '}
    </>
  );
};

export default PreviewWeather;
