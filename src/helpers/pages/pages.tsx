import { MainPage, Weather, Cinema, Blog, Friends } from '../../components';

export const PAGES: { path: string; element: JSX.Element }[] = [
  { path: '', element: <MainPage /> },
  { path: 'weather', element: <Weather /> },
  { path: 'cinema', element: <Cinema /> },
  { path: 'blog', element: <Blog /> },
  { path: 'friends', element: <Friends /> },
];
