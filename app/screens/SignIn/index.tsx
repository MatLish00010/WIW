import { TouchableOpacity } from 'react-native';

import { Text } from '@myapp/theme/Text';
import { ViewContainerCenter } from '@myapp/theme/View';
import { AuthProps } from '@myapp/navigation/Auth/types';
import styles from '@myapp/screens/SignIn/styles';
import { tintColorDark, tintColorLight } from '@myapp/theme/Colors';
import { useAuth } from '@myapp/hooks/useAuth';
import { ActivityIndicator } from '@myapp/theme/Loader';

const SignIn = ({ navigation }: AuthProps<'SignIn'>) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <ViewContainerCenter>
        <ActivityIndicator />
      </ViewContainerCenter>
    );
  }

  return (
    <ViewContainerCenter>
      <Text style={styles.title}>Sign In</Text>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('SignUp')}>
        <Text lightColor={tintColorLight} darkColor={tintColorDark} style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>
    </ViewContainerCenter>
  );
};

export default SignIn;
