import { ColorSchemeName } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { RootTabParamList } from '@myapp/navigation/types';
import LinkingConfiguration from '@myapp/navigation/LinkingConfiguration';
import HomeStackScreen from '@myapp/navigation/HomeStack';
import AccountStackScreen from '@myapp/navigation/AccountStack';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigator = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          options={() => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          })}
          name="HomeStack"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={() => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
          })}
          name="Account"
          component={AccountStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
