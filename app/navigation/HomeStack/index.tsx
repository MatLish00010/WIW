import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@myapp/screens/Home';
import Menu from '@myapp/screens/Menu';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen name="Menu" component={Menu} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
