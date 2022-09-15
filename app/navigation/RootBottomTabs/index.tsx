import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import GeneralStackNavigator from '@myapp/navigation/GeneralStack';
import Account from '@myapp/screens/Account';
import { RootTabParamList } from '@myapp/navigation/RootBottomTabs/types';
import { palette } from '@myapp/ui/Theme';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="GeneralStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: palette.blue,
      }}
    >
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarLabel: 'General',
          tabBarTestID: 'tab-general',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        })}
        name="GeneralStackNavigator"
        component={GeneralStackNavigator}
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
