import { NavigationContainer } from '@react-navigation/native';

const renderWithProvider = children => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default renderWithProvider;
