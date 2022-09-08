import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeManager } from '@myapp/ui/ThemeManager';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 'infinite',
    },
  },
});

const renderWithAllWrappers = children => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeManager>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeManager>
    </QueryClientProvider>
  );
};

export default renderWithAllWrappers;
