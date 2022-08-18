import { NavigatorScreenParams } from '@react-navigation/native';

import { RootTabParamList } from '@myapp/navigation/Root/types';
import { AuthStackParamList } from '@myapp/navigation/Auth/types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type RootParamList = RootTabParamList;
  }
}

export type StackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthStackScreen: NavigatorScreenParams<AuthStackParamList> | undefined;
};
