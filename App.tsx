import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from '@myapp/hooks/useCachedResources';
import useColorScheme from '@myapp/hooks/useColorScheme';
import Navigation from '@myapp/navigation';
import { LogBox } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}

LogBox.ignoreAllLogs();
