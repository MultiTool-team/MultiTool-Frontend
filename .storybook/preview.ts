import type { Preview } from '@storybook/react';

// Декоратор для обёртывания историй в BrowserRouter
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
