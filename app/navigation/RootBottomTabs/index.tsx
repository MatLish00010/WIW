import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackScreen from '@myapp/navigation/HomeStack';
import useColorScheme from '@myapp/hooks/useColorScheme';
import Colors from '@myapp/theme/Colors';
import Account from '@myapp/screens/Account';
import { RootTabParamList } from '@myapp/navigation/RootBottomTabs/types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabs = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
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
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;
