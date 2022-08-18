import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeStackParamList } from '@myapp/navigation/HomeStack/types';
import { AccountStackParamList } from '@myapp/navigation/AccountStack/types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type RootParamList = RootTabParamList;
  }
}

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList> | undefined;
  Account: NavigatorScreenParams<AccountStackParamList> | undefined;
};
