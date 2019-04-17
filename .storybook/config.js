import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeProvider from '../src/theme-provider';

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /index\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
