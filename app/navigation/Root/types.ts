import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamList } from '@myapp/navigation/HomeStack/types';
import { AccountStackParamList } from '@myapp/navigation/AccountStack/types';

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList> | undefined;
  AccountStack: NavigatorScreenParams<AccountStackParamList> | undefined;
};
