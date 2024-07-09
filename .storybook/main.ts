import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-controls', '@storybook/preset-scss'],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
