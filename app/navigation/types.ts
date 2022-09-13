import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthStackParamList } from '@myapp/navigation/AuthStack/types';
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
  AuthStackNavigator: NavigatorScreenParams<AuthStackParamList> | undefined;
};
