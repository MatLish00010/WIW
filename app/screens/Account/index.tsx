import { FC } from 'react';

import { ViewContainer, ViewContainerCenter } from '@myapp/theme/View';
import { ButtonText, Text } from '@myapp/theme/Text';
import { TouchableOpacityStyled, TouchableOpacitySubmit } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Account/styles';
import { TabScreenProps } from '@myapp/navigation/RootBottomTabs/types';
import useLogout from '@myapp/query/useLogout';
import { ActivityIndicator } from '@myapp/theme/Loader';
import useUser from '@myapp/hooks/useUser';

const Account: FC<TabScreenProps<'Account'>> = ({ navigation }) => {
  const { user } = useUser();
  const { isLoading, mutateAsync: logoutHandler } = useLogout();

  const handleLogout = async () => {
    await logoutHandler();
  };

  if (isLoading) {
    return (
      <ViewContainerCenter>
        <ActivityIndicator />
      </ViewContainerCenter>
    );
  }

  if (!user) {
    return (
      <ViewContainer style={styles.container}>
        <Text style={styles.text}>You must be logged in to access your account.</Text>
        <TouchableOpacityStyled
          onPress={() => navigation.navigate('AuthStackScreen', { screen: 'SignIn' })}
          style={styles.loginButton}
        >
          <ButtonText>Sign In</ButtonText>
        </TouchableOpacityStyled>
      </ViewContainer>
    );
  }

  return (
    <ViewContainer>
      <Text>Account</Text>
      <Text>Email: {user.email}</Text>
      <TouchableOpacitySubmit onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacitySubmit>
    </ViewContainer>
  );
};

export default Account;
