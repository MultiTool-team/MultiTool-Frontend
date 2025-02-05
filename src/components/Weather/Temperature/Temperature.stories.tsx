import Temperature from './Temperature';
import '../../../index.css';
import { StoriesTemplate } from '../..';

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
};

const Template = args => {
  return (
    <StoriesTemplate theme={args.theme}>
      <Temperature {...args} />
    </StoriesTemplate>
  );
};

export const TemperatureStories = Template.bind({});
TemperatureStories.args = {
  size: 'medium',
  temperature: 52,
  theme: 'light',
};
