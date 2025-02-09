import React from 'react';
import {
  thunderstorm_video,
  drizzle_video,
  rain_video,
  snow_video,
  clear_video,
  clouds_video,
} from '../../assets/weather';

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
  weatherGroup?: string;
}

// TO-DO: find the solution for styling the video
const BackgroundVideo: React.FC<weatherGroup> = ({ weatherGroup }) => {
  return (
    <video
      className='absolute z-0 h-120 w-full overflow-hidden rounded-4xl object-cover blur-[1px]'
      autoPlay
      loop
      muted
    >
      <source
        src={weatherGroup ?? clouds_video}
        type='video/mp4'
      />
    </video>
  );
};

export default BackgroundVideo;
