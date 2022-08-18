import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { ButtonText, Text } from '@myapp/theme/Text';
import { AccountScreenProps } from '@myapp/screens/Account/types';
import { useUser } from '@myapp/hooks/user';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Account/styles';

const Account: FC<AccountScreenProps> = ({ navigation }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <ViewContainer style={styles.container}>
        <Text style={styles.text}>You must be logged in to access your account.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AuthStackScreen')} style={styles.loginButton}>
          <ButtonText>Sign In</ButtonText>
        </TouchableOpacity>
      </ViewContainer>
    );
  }

  return (
    <ViewContainer>
      <Text>Account</Text>
    </ViewContainer>
  );
};

export default Account;
