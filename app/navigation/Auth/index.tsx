import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from '@myapp/navigation/Auth/types';
import SignIn from '@myapp/screens/SignIn';
import SignUp from '@myapp/screens/SignUp';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
