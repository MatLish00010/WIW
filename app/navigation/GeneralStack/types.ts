import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';

export type GeneralStackParamList = {
  General: undefined;
  Menu: undefined;
};

export type GeneralProps<Screen extends keyof GeneralStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<GeneralStackParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
