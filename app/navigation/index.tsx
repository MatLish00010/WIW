import { ColorSchemeName } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList } from '@myapp/navigation/types';
import Root from '@myapp/navigation/Root';
import AuthStackScreen from '@myapp/navigation/Auth';
import LinkingConfiguration from '@myapp/navigation/LinkingConfiguration';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
