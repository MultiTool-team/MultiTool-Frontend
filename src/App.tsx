import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Container, Header, SEO } from './components';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PAGES } from './helpers';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`h-full min-h-dvh w-full bg-[var(--bg-dark)] py-4 dark:bg-[var(--bg-light)] ${darkMode && 'dark'}`}
    >
      <BrowserRouter>
        <SEO
          title='MultiTool – Ultimate Productivity Toolkit'
          description='MultiTool is a universal toolkit designed to solve various tasks and boost your productivity. Find everything you need for work and leisure in one place.'
          keywords='multitool, utilities, productivity, tools, efficiency, work, leisure'
        />
        <Header darkMode={darkMode} />
        <Container>
          <Routes>
            {PAGES.map((page, index) => (
              <Route
                key={index}
                path={`/${page.path}`}
                element={page.element}
              />
            ))}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
