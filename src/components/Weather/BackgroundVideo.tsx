import React from 'react';
import clouds_video from '../../assets/weather/clouds_video.mp4';
import clear_video from '../../assets/weather/clear_video.mp4';
import snow_video from '../../assets/weather/snow_video.mp4';
import rain_video from '../../assets/weather/rain_video.mp4';
import drizzle_video from '../../assets/weather/drizzle_video.mp4';
import thunderstorm_video from '../../assets/weather/thunderstorm_video.mp4';

interface VideoData {
  [key: string]: string; // videos are stored in assets
}

// videos are based on either [Thunderstorm | Drizzle | Rain | Snow | Clear | Clouds]
const videos: VideoData = {
  Thunderstorm: thunderstorm_video,
  Drizzle: drizzle_video,
  Rain: rain_video,
  Snow: snow_video,
  Clear: clear_video,
  Clouds: clouds_video,
};

// weatherData.weather[0].main group
interface weatherGroup {
  weatherGroup: string;
}

// TO-DO: find the solution for styling the video
const BackgroundVideo: React.FC<weatherGroup> = ({ weatherGroup }) => {
  return (
    <video
      src={videos[weatherGroup]}
      autoPlay
      loop
      muted
      className='absolute z-0 h-120 w-1/2 object-cover px-5 opacity-50'
    />
  );
};

export default BackgroundVideo;
