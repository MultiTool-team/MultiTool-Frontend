import { AboutDevelopers, Quote } from '..';

const MainPage = () => {
  return (
    <div className='text flex w-full flex-col items-center gap-36 text-center'>
      <Quote />
      {/* //ABOUT SECITON */}
      <AboutDevelopers />
    </div>
  );
};

export default MainPage;
