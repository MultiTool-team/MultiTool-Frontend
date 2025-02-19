import { ComponentStory, ComponentMeta } from '@storybook/react';
import Temperature from './Temperature';
import '../../../index.css';
import { StoriesTemplate } from '../../../shared';

export default {
  title: 'UI/Weather/Temperature',
  component: Temperature,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Размер шрифта температуры',
      defaultValue: 'medium',
    },
    temperature: {
      control: { type: 'number' },
      description: 'Температура в градусах',
    },
    feelsLikeTemperature: {
      control: { type: 'number' },
      description: 'Ощущаемая температура в градусах',
    },
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Тема оформления',
      defaultValue: 'light',
    },
  },
} as ComponentMeta<typeof Temperature>;

interface TemperatureStoryProps {
  size: 'small' | 'medium' | 'large';
  temperature?: number;
  feelsLikeTemperature?: number;
  theme: 'light' | 'dark';
}

const Template: ComponentStory<typeof Temperature> = (
  args: TemperatureStoryProps
) => (
  <StoriesTemplate theme={args.theme}>
    <Temperature {...args} />
  </StoriesTemplate>
);

export const TemperatureStories = Template.bind({});
TemperatureStories.args = {
  size: 'medium',
  temperature: 52,
  feelsLikeTemperature: undefined,
  theme: 'light',
};
