import ThemeProvider from '../ui/ThemeProvider';
import React from 'react';

export const withTheme = (component: () => React.ReactNode) => () => (
  <ThemeProvider>
    {component()}
  </ThemeProvider>
);
