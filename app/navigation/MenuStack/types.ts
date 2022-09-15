import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';

export type MenuStackParamList = {
  Kitchens: undefined;
  Menu: {
    kitchen: string;
  };
};

export type MenuStackProps<Screen extends keyof MenuStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MenuStackParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
