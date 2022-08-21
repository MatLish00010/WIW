import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { ButtonText, Text } from '@myapp/theme/Text';
import { TouchableOpacityStyled, TouchableOpacitySubmit } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Account/styles';
import { TabScreenProps } from '@myapp/navigation/RootBottomTabs/types';
import { useAuth } from '@myapp/hooks/useAuth';
import { logout } from '@myapp/firebase';

const Account: FC<TabScreenProps<'Account'>> = ({ navigation }) => {
  const { user } = useAuth();

  console.log('user:', user);

  const handleLogout = async () => {
    await logout();
  };

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
