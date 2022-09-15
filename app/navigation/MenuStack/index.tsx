import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuStackParamList } from '@myapp/navigation/MenuStack/types';
import Kitchens from '@myapp/screens/Kitchens';
import Menu from '@myapp/screens/Menu';
import firstLetterUpperCase from '@myapp/utils/Text/firstLetterUpperCase';

const MenuStack = createNativeStackNavigator<MenuStackParamList>();

const MenuStackNavigator = () => {
  return (
    <MenuStack.Navigator
      initialRouteName="Kitchens"
      screenOptions={{
        animation: 'slide_from_left',
      }}
    >
      <MenuStack.Screen name="Kitchens" component={Kitchens} />
      <MenuStack.Screen
        options={({ route }) => {
          return {
            title: `${firstLetterUpperCase(route.params.kitchen)} kitchen menu`,
          };
        }}
        name="Menu"
        component={Menu}
      />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
