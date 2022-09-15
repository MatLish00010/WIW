import { createNativeStackNavigator } from '@react-navigation/native-stack';
import General from '@myapp/screens/General';
import Menu from '@myapp/screens/Menu';
import { GeneralStackParamList } from '@myapp/navigation/GeneralStack/types';

const GeneralStack = createNativeStackNavigator<GeneralStackParamList>();

const GeneralStackNavigator = () => {
  return (
    <GeneralStack.Navigator
      initialRouteName="General"
      screenOptions={{
        animation: 'slide_from_left',
      }}
    >
      <GeneralStack.Screen
        options={{
          headerShown: false,
        }}
        name="General"
        component={General}
      />
      <GeneralStack.Screen
        options={{
          title: 'Kitchen',
        }}
        name="Menu"
        component={Menu}
      />
    </GeneralStack.Navigator>
  );
};

export default GeneralStackNavigator;
