import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { TabScreenProps } from '@myapp/navigation/RootBottomTabs/types';
import useLogout from '@myapp/query/useLogout';

import useUser from '@myapp/hooks/useUser';
import { palette, spacing } from '@myapp/ui/Theme';
import { View, ViewContainer, Text, ButtonText, Button } from '@myapp/ui';

const Account: FC<TabScreenProps<'Account'>> = ({ navigation }) => {
  const { user } = useUser();
  const { isLoading, mutateAsync: logoutHandler } = useLogout();

  const handleLogout = async () => {
    await logoutHandler();
  };

  if (isLoading) {
    return (
      <View testID="loading" justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </View>
    );
  }

  if (!user) {
    return (
      <View testID={'account-screen-user-is-not-registered'} alignItems="center" justifyContent="center">
        <Text mb={spacing.XL}>You must be logged in to access your account.</Text>
        <Button testID="signIn-btn" onPress={() => navigation.navigate('AuthStackNavigator', { screen: 'SignIn' })}>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </View>
    );
  }

  return (
    <ViewContainer testID={'account-screen-user-is-registered'}>
      <Text mb={spacing.M}>Account</Text>
      <Text mb={spacing.M}>Email: {user.email}</Text>
      <Button testID="logout-btn" variant={'Error'} mt={spacing.XXL} onPress={handleLogout}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </ViewContainer>
  );
};

export default Account;
