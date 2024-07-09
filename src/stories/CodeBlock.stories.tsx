import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CodeBlock } from '../components/CodeBlock';
import { THEME_ARG_TYPES } from '../common/constants';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...THEME_ARG_TYPES,
  },
} as Meta<typeof CodeBlock>;

const Template: StoryFn<typeof CodeBlock> = args => (
  <CodeBlock {...args}>{`
  const brandsArray = ['Mercedes', 'Audi', 'BMW', 'Porsche'];
  const numbersArray = [1, 2, 3, 4, 5];
  const objectsArray = [
    {exterior: 'Nardo Gray', interior: 'Oyster' },
    {exterior: 'Nogaro Blue', interior: 'Black/Blue'},
    {exterior: 'Meteor Gray', interior: 'Stone Gray'}
  ];

  numbersArray.at(2); // 3, gets item at index 2
  brandsArray.concat('Toyota'); // ['Mercedes', 'Audi', 'BMW', 'Porsche', 'Toyota']
  numbersArray.every((element) => element < 6); // true, every element is less than 6
  brandsArray.filter((brand) => brand === 'BMW'); // 'BMW'
  numbersArray.findIndex((element) => element > 3); // 3, returns first index matching condition
  numbersArray.find((element) => element > 3); // 4, returns first value matching condition
  numbersArray.includes(3); // true
  brandsArray.join(', '); // 'Mercedes, Audi, BMW, Porsche'
  numbersArray.map((element) => element * 10); // [10, 20, 30, 40, 50]
  numbersArray.pop(); // 5, returns removed element, modifying original array to [1,2,3,4]
  numbersArray.push(6); // 6, returns the element added, modifying the original array
  numbersArray.some((element) => element % 2 !== 0); // true (at least 1 odd element exists)
  numbersArray.toString(); // '1,2,3,4,5'
  `}</CodeBlock>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  language: 'typescript',
  theme: 'light',
};
