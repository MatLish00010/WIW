import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { TabScreenProps } from '@myapp/navigation/RootBottomTabs/types';
import useLogout from '@myapp/query/useLogout';

import useUser from '@myapp/hooks/useUser';
import { UIButtonText, UIButton } from '@myapp/ui/Button';
import { UIText } from '@myapp/ui/Text';
import { palette, spacing } from '@myapp/ui/Theme';
import { UIView, UIViewContainer } from '@myapp/ui/View';

const Account: FC<TabScreenProps<'Account'>> = ({ navigation }) => {
  const { user } = useUser();
  const { isLoading, mutateAsync: logoutHandler } = useLogout();

  const handleLogout = async () => {
    await logoutHandler();
  };

  if (isLoading) {
    return (
      <UIView justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </UIView>
    );
  }

  if (!user) {
    return (
      <UIView testID={'account-screen'} alignItems="center" justifyContent="center">
        <UIText mb={spacing.XL}>You must be logged in to access your account.</UIText>
        <UIButton testID="signIn-btn" onPress={() => navigation.navigate('AuthStackNavigator', { screen: 'SignIn' })}>
          <UIButtonText>Sign In</UIButtonText>
        </UIButton>
      </UIView>
    );
  }

  return (
    <UIViewContainer testID={'account-screen'}>
      <UIText mb={spacing.M}>Account</UIText>
      <UIText mb={spacing.M}>Email: {user.email}</UIText>
      <UIButton variant={'Error'} mt={spacing.XXL} onPress={handleLogout}>
        <UIButtonText>Logout</UIButtonText>
      </UIButton>
    </UIViewContainer>
  );
};

export default Account;
