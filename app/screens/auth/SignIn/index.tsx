import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { AuthProps } from '@myapp/navigation/Auth/types';
import { useSignIn } from '@myapp/screens/auth/SignIn/query';
import { UIInput } from '@myapp/ui/Fields';
import { palette, spacing } from '@myapp/ui/Theme';
import { UIText } from '@myapp/ui/Text';
import { UIButton, UIButtonText } from '@myapp/ui/Button';
import { UIView, UIViewContainer } from '@myapp/ui/View';

const SignIn = ({ navigation }: AuthProps<'SignIn'>) => {
  const { isLoading, mutateAsync: signInHandler } = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!email.length || !password.length) {
      setError(true);

      return;
    }

    await signInHandler({ email, password });
    setEmail('');
    setPassword('');

    navigation.goBack();
  };

  useEffect(() => {
    setError(false);
  }, [email, password]);

  if (isLoading) {
    return (
      <UIViewContainer width="100%" alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </UIViewContainer>
    );
  }

  return (
    <UIViewContainer justifyContent="center" alignItems="center">
      <UIView width="100%" alignItems="center" justifyContent="center">
        <UIText fontSize="20px" fontWeight="600">
          Sign In
        </UIText>
        {error && (
          <UIText mt={spacing.M} variant="Error">
            Email and Password are required
          </UIText>
        )}
        <UIInput placeholder="Email" mb={spacing.M} autoCapitalize="none" value={email} onChangeText={setEmail} />
        <UIInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          mb={spacing.XL}
        />
        <UIButton onPress={handleSubmit} width="80%">
          <UIButtonText>Sign In</UIButtonText>
        </UIButton>
        <UIButton onPress={() => navigation.navigate('SignUp')} alignSelf="flex-end" variant="Clear" mt={spacing.L}>
          <UIButtonText color={palette.grey}>Sign Up</UIButtonText>
        </UIButton>
      </UIView>
    </UIViewContainer>
  );
};

export default SignIn;
