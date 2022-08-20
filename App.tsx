import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from '@myapp/hooks/useCachedResources';
import useColorScheme from '@myapp/hooks/useColorScheme';
import Navigation from '@myapp/navigation';
import { AuthProvider } from '@myapp/providers/Auth';
import { LogBox } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation colorScheme={colorScheme} />
        </AuthProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

LogBox.ignoreAllLogs();
