import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '@myapp/screens/Account';
import { AccountStackParamList } from '@myapp/navigation/AccountStack/types';

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        animation: 'slide_from_left',
      }}
    >
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
