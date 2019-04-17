import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

storiesOf('Button', module)
  .add('with text', () => <Button>Hey!</Button>)
  .add('with emojy', () => (
    <Button variant='danger'>
      <span role='img' aria-label='Heck yeah!'>🤘🤘</span>
    </Button>
  ));
