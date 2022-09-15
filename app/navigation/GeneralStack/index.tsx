import { createNativeStackNavigator } from '@react-navigation/native-stack';
import General from '@myapp/screens/General';
import { GeneralStackParamList } from '@myapp/navigation/GeneralStack/types';
import MenuStackNavigator from '@myapp/navigation/MenuStack';

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
          headerShown: false,
        }}
        name="MenuStackNavigator"
        component={MenuStackNavigator}
      />
    </GeneralStack.Navigator>
  );
};

export default GeneralStackNavigator;
