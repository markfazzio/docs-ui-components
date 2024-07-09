import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { BackButton } from '../components/BackButton';
import { THEME_ARG_TYPES } from '../common/constants';

export default {
  title: 'BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...THEME_ARG_TYPES,
  },
} as Meta<typeof BackButton>;

const Template: StoryFn<typeof BackButton> = args => <BackButton {...args} />;

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {};
