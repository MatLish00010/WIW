import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackNavigator from '@myapp/navigation/HomeStack';
import Account from '@myapp/screens/Account';
import { RootTabParamList } from '@myapp/navigation/RootBottomTabs/types';
import { palette } from '@myapp/ui/Theme';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: palette.blue,
      }}
    >
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarTestID: 'tab-home',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        })}
        name="HomeStackNavigator"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarTestID: 'tab-account',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        })}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;
