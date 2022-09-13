import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@myapp/navigation/HomeStack/types';

export type MenuScreenProps<Screen extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  Screen
>;
