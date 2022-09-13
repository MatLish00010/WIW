import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useCachedResources from '@myapp/hooks/useCachedResources';
import Navigation from '@myapp/navigation';
import { ThemeManager } from '@myapp/ui/ThemeManager';
import LinkingConfiguration from '@myapp/navigation/LinkingConfiguration';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import useColorScheme from '@myapp/hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeManager>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer
              linking={LinkingConfiguration}
              theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
              <Navigation />
            </NavigationContainer>
            <StatusBar />
          </QueryClientProvider>
        </ThemeManager>
      </SafeAreaProvider>
    );
  }
}

LogBox.ignoreAllLogs();
