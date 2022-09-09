import { ThemeManager } from '@myapp/ui/ThemeManager';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient();

const testingWrapper = children => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeManager>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeManager>
    </QueryClientProvider>
  );
};

export default testingWrapper;
