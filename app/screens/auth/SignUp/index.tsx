import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { AuthProps } from '@myapp/navigation/Auth/types';
import { useSignUp } from '@myapp/screens/auth/SignUp/query';
import { UIView, UIViewContainer } from '@myapp/ui/View';
import { UIText } from '@myapp/ui/Text';
import { UIInput } from '@myapp/ui/Fields';
import { palette, spacing } from '@myapp/ui/Theme';
import { UIButton, UIButtonText } from '@myapp/ui/Button';

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
      <UIViewContainer width="100%" alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </UIViewContainer>
    );
  }

  return (
    <UIViewContainer justifyContent="center" alignItems="center">
      <UIView width="100%" alignItems="center" justifyContent="center">
        <UIText fontSize="20px" fontWeight="600">
          Sign Up
        </UIText>
        {error && (
          <UIText mt={spacing.M} variant="Error">
            Email and Password are required
          </UIText>
        )}
        <UIInput mb={spacing.M} placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <UIInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          mb={spacing.XL}
        />
        <UIButton onPress={handleSubmit} width="80%">
          <UIButtonText>Sign Up</UIButtonText>
        </UIButton>
      </UIView>
    </UIViewContainer>
  );
};

export default SignUp;
