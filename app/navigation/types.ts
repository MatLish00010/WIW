import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthStackParamList } from '@myapp/navigation/Auth/types';
import { RootTabParamList } from '@myapp/navigation/RootBottomTabs/types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type RootParamList = StackParamList;
  }
}

export type StackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthStackScreen: NavigatorScreenParams<AuthStackParamList> | undefined;
};
