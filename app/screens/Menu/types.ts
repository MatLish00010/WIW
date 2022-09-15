import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GeneralStackParamList } from '@myapp/navigation/GeneralStack/types';

export type MenuScreenProps<Screen extends keyof GeneralStackParamList> = NativeStackScreenProps<
  GeneralStackParamList,
  Screen
>;
