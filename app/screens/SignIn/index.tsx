import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Text } from '@myapp/theme/Text';
import { View, ViewContainerCenter } from '@myapp/theme/View';
import { AuthProps } from '@myapp/navigation/Auth/types';
import styles from '@myapp/screens/SignIn/styles';
import { tintColorDark, tintColorLight } from '@myapp/theme/Colors';
import { useAuth } from '@myapp/hooks/useAuth';
import { ActivityIndicator } from '@myapp/theme/Loader';
import { TextInput } from '@myapp/theme/Fields';
import { TouchableOpacitySubmit } from '@myapp/theme/Buttons';
import { login } from '@myapp/firebase';

const SignIn = ({ navigation }: AuthProps<'SignIn'>) => {
  const { isLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    await login(email, password);
    setEmail('');
    setPassword('');

    navigation.goBack();
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
        <Text style={styles.title}>Sign In</Text>
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
          secureTextEntry={!showPassword}
        />
        <TouchableOpacitySubmit style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacitySubmit>
        <TouchableOpacity style={[styles.registerButton]} onPress={() => navigation.navigate('SignUp')}>
          <Text lightColor={tintColorLight} darkColor={tintColorDark} style={styles.buttonText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ViewContainerCenter>
  );
};

export default SignIn;
