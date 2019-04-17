import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from './theme';

const ThemeProvider = props => (
  <EmotionThemeProvider theme={theme}>
    {props.children}
  </EmotionThemeProvider>
);

export default ThemeProvider;

