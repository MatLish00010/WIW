import React, { FC } from 'react';

import useColorScheme from '@myapp/hooks/useColorScheme';
import { darkTheme, theme } from '@myapp/ui/Theme';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

export const ThemeManager: FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'light' ? theme : darkTheme}>
      <StatusBar />
      {children}
    </ThemeProvider>
  );
};
