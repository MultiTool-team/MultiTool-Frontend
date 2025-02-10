import { AboutDevelopers, Quote } from '..';

const MainPage = () => {
  return (
    <div className='flex w-full flex-col items-center gap-36 text-center'>
      <Quote />
      <AboutDevelopers />
    </div>
  );
};

export default MainPage;
