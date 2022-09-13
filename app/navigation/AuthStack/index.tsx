import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from '@myapp/navigation/AuthStack/types';
import SignIn from '@myapp/screens/auth/SignIn';
import SignUp from '@myapp/screens/auth/SignUp';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
