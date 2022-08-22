import { useEffect, useState } from 'react';

import { Text } from '@myapp/theme/Text';
import { View, ViewContainerCenter } from '@myapp/theme/View';
import { ActivityIndicator } from '@myapp/theme/Loader';
import { AuthProps } from '@myapp/navigation/Auth/types';
import styles from '@myapp/screens/auth/styles';
import { TextInput } from '@myapp/theme/Fields';
import { TouchableOpacitySubmit } from '@myapp/theme/Buttons';
import { useSignUp } from '@myapp/screens/auth/SignUp/query';

const SignUp = ({ navigation }: AuthProps<'SignUp'>) => {
  const { mutateAsync: signUpHandler, isLoading } = useSignUp();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setError(false);
  }, [email, password]);

  const handleSubmit = async () => {
    if (!email.length || !password.length) {
      setError(true);

      return;
    }

    setError(false);

    await signUpHandler({ email, password });

    setEmail('');
    setPassword('');

    navigation.navigate('Root', { screen: 'Account' });
  };

  if (isLoading) {
    return (
      <ViewContainerCenter>
        <ActivityIndicator />
      </ViewContainerCenter>
    );
  }

  return (
    <ViewContainerCenter>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        {error && <Text style={styles.errorText}>Email and Password are required</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacitySubmit style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacitySubmit>
      </View>
    </ViewContainerCenter>
  );
};

export default SignUp;
