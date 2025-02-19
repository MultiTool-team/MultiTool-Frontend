import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import ThemeIcon from './components/ThemeIcon';
import { ROUTES } from '../../helpers';
import { setThemeSetting } from '../../store/features/themeSlice';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const dispatch = useDispatch();

  const handleThemeSwitch = useCallback(() => {
    dispatch(setThemeSetting());
  }, [dispatch]);

  const routesList = ROUTES.map((route, index) => (
    <li
      key={index}
      className='scale cursor-pointer text-sm font-bold sm:text-base'
    >
      <Link
        to={`/${route.toLowerCase()}`}
        className='text-alt'
      >
        {route}
      </Link>
    </li>
  ));

  return (
    <header className='bg sticky top-2 z-40 mx-auto flex w-[90%] max-w-[1280px] items-center justify-between rounded-4xl border-1 border-[var(--bg-dark)] px-6 py-3 select-none sm:px-8 md:h-20 lg:w-[70%] dark:border-[var(--bg-light)]'>
      <Link to='/'>
        <h2 className='title'>MultiTool.</h2>
      </Link>

      <nav>
        {/* <h2 className='scale cursor-pointer text-sm font-bold sm:text-base md:text-lg lg:text-xl'>
          Our Projects
        </h2> */}
        <ul className='flex items-center gap-6 lg:gap-8'>{routesList}</ul>
      </nav>

      <button
        className='group cursor-pointer'
        onClick={handleThemeSwitch}
      >
        <div className='relative h-8 w-8'>
          <ThemeIcon darkMode={darkMode} />
        </div>
      </button>
    </header>
  );
};

export default React.memo(Header);
