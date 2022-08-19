import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeStackParamList } from '@myapp/navigation/HomeStack/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@myapp/navigation/types';

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Account: undefined;
};

export type TabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<StackParamList>
>;
