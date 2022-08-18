import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackScreen from '@myapp/navigation/HomeStack';
import AccountStackScreen from '@myapp/navigation/AccountStack';
import { RootTabParamList } from '@myapp/navigation/Root/types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Root = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
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
        name="AccountStack"
        component={AccountStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Root;
