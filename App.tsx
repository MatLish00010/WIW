import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useCachedResources from '@myapp/hooks/useCachedResources';
import useColorScheme from '@myapp/hooks/useColorScheme';
import Navigation from '@myapp/navigation';
import { ThemeManager } from '@myapp/ui/ThemeManager';

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
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </QueryClientProvider>
        </ThemeManager>
      </SafeAreaProvider>
    );
  }
}

LogBox.ignoreAllLogs();
