import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';

export type HomeStackParamList = {
  Home: undefined;
  Menu: undefined;
};

export type HomeProps<Screen extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
