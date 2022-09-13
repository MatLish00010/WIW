import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList } from '@myapp/navigation/types';
import AuthStackNavigator from '@myapp/navigation/AuthStack';
import RootTabs from '@myapp/navigation/RootBottomTabs';

export const RootStack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Root" component={RootTabs} />
      <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </RootStack.Navigator>
  );
};

export default Navigator;
