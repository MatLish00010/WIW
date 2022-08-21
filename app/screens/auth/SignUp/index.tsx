import { useState } from 'react';

import { Text } from '@myapp/theme/Text';
import { View, ViewContainerCenter } from '@myapp/theme/View';
import { ActivityIndicator } from '@myapp/theme/Loader';
import { useAuth } from '@myapp/hooks/useAuth';
import { register } from '@myapp/firebase';
import { AuthProps } from '@myapp/navigation/Auth/types';
import styles from '@myapp/screens/auth/styles';
import { TextInput } from '@myapp/theme/Fields';
import { TouchableOpacitySubmit } from '@myapp/theme/Buttons';

const SignUp = ({ navigation }: AuthProps<'SignUp'>) => {
  const { isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isLoading) {
    return (
      <ViewContainerCenter>
        <ActivityIndicator />
      </ViewContainerCenter>
    );
  }

  const handleSubmit = async () => {
    await register(email, password);
    setEmail('');
    setPassword('');

    navigation.navigate('Root', { screen: 'Account' });
  };

  return (
    <ViewContainerCenter>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { marginTop: 10 }]}
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
