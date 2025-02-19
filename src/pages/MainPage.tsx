import {
  AboutDevelopers,
  DeveloperStats,
  Library,
  Quote,
} from '../widgets/main';

const MainPage = () => {
  return (
    <div className='flex w-full flex-col items-center gap-36 text-center'>
      <Quote />
      <AboutDevelopers />
      <DeveloperStats />
      <Library />
    </div>
  );
};

export default MainPage;
