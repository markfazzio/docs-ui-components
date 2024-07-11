import type { StorybookConfig } from '@storybook/react-vite';

const { mergeConfig } = require('vite');

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-controls', '@storybook/preset-scss'],
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
