import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Navbar } from '../components/Navbar';
import { THEME_ARG_TYPES } from '../common/constants';
import { SECTIONS } from './data/sections';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...THEME_ARG_TYPES,
  },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = args => <Navbar {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  className: 'bg-gray-100',
  navItems: SECTIONS,
  theme: 'light',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  className: 'bg-green-900',
  navItems: SECTIONS,
  theme: 'dark',
};
