import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList } from '@myapp/navigation/types';
import AuthStackNavigator from '@myapp/navigation/AuthStack';
import RootTabs from '@myapp/navigation/RootBottomTabs';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Root" component={RootTabs} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
