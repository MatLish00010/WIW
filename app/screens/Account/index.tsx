import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { ButtonText, Text } from '@myapp/theme/Text';
import { useUser } from '@myapp/hooks/user';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Account/styles';
import { TabScreenProps } from '@myapp/navigation/RootBottomTabs/types';

const Account: FC<TabScreenProps<'Account'>> = ({ navigation }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <ViewContainer style={styles.container}>
        <Text style={styles.text}>You must be logged in to access your account.</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthStackScreen', { screen: 'SignIn' })}
          style={styles.loginButton}
        >
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
