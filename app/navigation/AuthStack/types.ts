import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthProps<Screen extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
