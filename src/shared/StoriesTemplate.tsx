import { ReactNode } from 'react';
import { Container } from '../app/Container';

interface IStoriesTemplate {
  theme: 'dark' | 'light';
  children: ReactNode;
}

const StoriesTemplate: React.FC<IStoriesTemplate> = ({ theme, children }) => {
  return (
    <div
      className={`h-full min-h-dvh w-full bg-[var(--bg-dark)] py-4 dark:bg-[var(--bg-light)] ${theme === 'dark' && 'dark'}`}
    >
      <Container>
        <div className='text flex w-full flex-col items-center gap-36 text-center'>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default StoriesTemplate;
