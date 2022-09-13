import { ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { AuthProps } from '@myapp/navigation/AuthStack/types';
import { TUseSignInProps, useSignIn } from '@myapp/screens/auth/SignIn/query';
import { palette, spacing } from '@myapp/ui/Theme';
import { ViewContainer, View, Text, TextInput, Button, ButtonText } from '@myapp/ui';
import { schema } from '@myapp/screens/auth/schema';

const SignIn = ({ navigation }: AuthProps<'SignIn'>) => {
  const { isLoading, mutateAsync: signInHandler } = useSignIn();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }: TUseSignInProps) => {
    await signInHandler({ email, password });
    navigation.navigate('Root', { screen: 'Account' });
  };

  if (isLoading) {
    return (
      <ViewContainer testID="loading" width="100%" alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </ViewContainer>
    );
  }

  return (
    <ViewContainer testID="signIn-screen" justifyContent="center" alignItems="center">
      <View width="100%" alignItems="center" justifyContent="center">
        <Text testID="label" fontSize="20px" fontWeight="600">
          Sign In
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email?.message && (
          <Text mt={spacing.S} variant={'Error'}>
            {errors.email.message}
          </Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mt={spacing.M}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password?.message && (
          <Text mt={spacing.S} variant={'Error'}>
            {errors.password.message}
          </Text>
        )}
        <Button testID="signIn-btn" disabled={isLoading} mt={spacing.XL} onPress={handleSubmit(onSubmit)} width="80%">
          <ButtonText>Sign In</ButtonText>
        </Button>
        <Button
          testID="signUp-btn"
          onPress={() => navigation.navigate('SignUp')}
          alignSelf="flex-end"
          variant="Clear"
          mt={spacing.L}
        >
          <ButtonText color={palette.grey}>Sign Up</ButtonText>
        </Button>
      </View>
    </ViewContainer>
  );
};

export default SignIn;
