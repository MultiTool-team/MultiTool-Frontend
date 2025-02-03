import axios from 'axios';

const DA_POEBAT_MNE_API_TOKEN: string = 'b3071ec989aef18fa9569ff8e6ddde90';
const getWeatherByCoords = async (
  lon: number | undefined,
  lat: number | undefined
) => {
  try {
    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${DA_POEBAT_MNE_API_TOKEN}`;
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

export default getWeatherByCoords;
