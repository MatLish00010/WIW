import { ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { AuthProps } from '@myapp/navigation/AuthStack/types';
import { TUseSignUpProps, useSignUp } from '@myapp/screens/auth/SignUp/query';
import { palette, spacing } from '@myapp/ui/Theme';
import { View, ViewContainer, Text, TextInput, Button, ButtonText } from '@myapp/ui';
import { schema } from '@myapp/screens/auth/schema';

const SignUp = ({ navigation }: AuthProps<'SignUp'>) => {
  const { mutateAsync: signUpHandler, isLoading } = useSignUp();

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

  const onSubmit = async ({ email, password }: TUseSignUpProps) => {
    await signUpHandler({ email, password });

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
    <ViewContainer testID="signUp-screen" justifyContent="center" alignItems="center">
      <View width="100%" alignItems="center" justifyContent="center">
        <Text testID="label" fontSize="20px" fontWeight="600">
          Sign Up
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
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
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              autoCapitalize="none"
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
        <Button testID="signUp-btn" disabled={isLoading} mt={spacing.XL} onPress={handleSubmit(onSubmit)} width="80%">
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </View>
    </ViewContainer>
  );
};

export default SignUp;
