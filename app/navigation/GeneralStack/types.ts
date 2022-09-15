import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';
import { MenuStackParamList } from '@myapp/navigation/MenuStack/types';

export type GeneralStackParamList = {
  General: undefined;
  MenuStackNavigator: NavigatorScreenParams<MenuStackParamList> | undefined;
};

export type GeneralProps<Screen extends keyof GeneralStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<GeneralStackParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
