import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { SectionContainer } from '../components/SectionContainer';
import { SectionMainTitle } from '../components/SectionMainTitle';
import { SectionSubTitle } from '../components/SectionSubTitle';
import { SectionDescription } from '../components/SectionDescription';
import { THEME_ARG_TYPES } from '../common/constants';

export default {
  title: 'Section',
  component: SectionContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...THEME_ARG_TYPES,
  },
} as Meta<typeof SectionContainer>;

const Template: StoryFn<typeof SectionContainer> = args => (
  <SectionContainer {...args}>
    <SectionMainTitle label="Arrays" />
    <SectionSubTitle label="Common Methods" />
    <SectionDescription>
      Slice returns selected elements in an array as a new array. Selects using
      start and optional end argument (without including last element). Negative
      index counts back from end of array. Avoid using{' '}
      <code>array.splice()</code> as it mutates the original array.
    </SectionDescription>
  </SectionContainer>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {};
