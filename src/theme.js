const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: {
    grey: '#2b2b2b',
    blue: '#08C',
    white: '#FFFFFF',
    tomato: 'tomato'
  },
  radii: [0, 3],
};

const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      color: baseTheme.colors.white,
      backgroundColor: baseTheme.colors.blue,
    },
    danger: {
      color: baseTheme.colors.white,
      backgroundColor: baseTheme.colors.tomato,
    },
  },
};

export default theme;
