import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

const Meta: ComponentMeta<typeof Button> = { title: 'components/Button/Button', component: Button };
const Story: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Story.bind({});

export default Meta;
