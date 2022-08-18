import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { StackParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<StackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeStack: {
            screens: {
              Home: 'Home',
              Menu: 'Menu',
            },
          },
          AccountStack: {
            screens: {
              Account: 'Account',
            },
          },
        },
      },
      AuthStackScreen: {
        screens: {
          SignIn: 'SignIn',
          SignUp: 'SignUp',
        },
      },
    },
  },
};

export default linking;
