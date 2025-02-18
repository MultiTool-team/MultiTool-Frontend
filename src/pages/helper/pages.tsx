import { Blog, Cinema, Friends, MainPage, Weather } from '..';

export const PAGES = [
  { path: '', element: <MainPage /> },
  { path: 'weather', element: <Weather /> },
  { path: 'cinema', element: <Cinema /> },
  { path: 'blog', element: <Blog /> },
  { path: 'friends', element: <Friends /> },
];
