import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';

storiesOf('Input', module)
  .add('Normal input', () => <Input placeholder='Text' type='text' />);
