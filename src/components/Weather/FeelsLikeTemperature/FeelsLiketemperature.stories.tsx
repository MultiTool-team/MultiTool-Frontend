import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeelsLikeTemperature from './FeelsLikeTemperature';
import { ComponentSizes } from '../Temperature/Temperature';
import '../../../index.css';
import { StoriesTemplate } from '../..';

export default {
  title: 'UI/Weather/FeelsLikeTemperature',
  component: FeelsLikeTemperature,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Размер шрифта текста',
      defaultValue: 'medium',
    },
    feelsLikeTemperature: {
      control: { type: 'number' },
      description: 'Ощущаемая температура (в градусах)',
    },
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Тема оформления',
      defaultValue: 'light',
    },
  },
} as ComponentMeta<typeof FeelsLikeTemperature>;

// Определяем интерфейс аргументов
interface FeelsLikeTemperatureProps {
  size: ComponentSizes;
  feelsLikeTemperature?: number;
  theme: 'light' | 'dark';
}

// Создаем шаблонную Story
const Template: ComponentStory<typeof FeelsLikeTemperature> = (
  args: FeelsLikeTemperatureProps
) => (
  <StoriesTemplate theme={args.theme}>
    <FeelsLikeTemperature {...args} />
  </StoriesTemplate>
);

// Экспортируем вариант Story
export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  feelsLikeTemperature: 22,
  theme: 'light',
};
