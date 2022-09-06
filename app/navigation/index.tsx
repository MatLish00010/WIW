import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList } from '@myapp/navigation/types';
import AuthStackNavigator from '@myapp/navigation/AuthStack';
import LinkingConfiguration from '@myapp/navigation/LinkingConfiguration';
import RootTabs from '@myapp/navigation/RootBottomTabs';
import useColorScheme from '@myapp/hooks/useColorScheme';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={RootTabs} />
        <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
