import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import useColorScheme from '@myapp/hooks/useColorScheme';
import Home from '@myapp/screens/Home';
import Menu from '@myapp/screens/Menu';
import SelectedItems from '@myapp/screens/SelectedItems';

import Colors from '@myapp/theme/Colors';
import { RootTabParamList, RootTabScreenProps } from '@myapp/navigation/types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="SelectedItems"
        component={SelectedItems}
        options={{
          title: 'Selected Items',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook-check-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <MaterialCommunityIcons
                name="information-outline"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book-open" color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
