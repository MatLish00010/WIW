import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@myapp/screens/Home';
import Menu from '@myapp/screens/Menu';
import { HomeStackParamList } from '@myapp/navigation/HomeStack/types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'slide_from_left',
      }}
    >
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          title: 'Kitchen',
        }}
        name="Menu"
        component={Menu}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
