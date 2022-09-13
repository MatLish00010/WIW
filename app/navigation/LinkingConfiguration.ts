import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { StackParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<StackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeStackNavigator: {
            screens: {
              Home: 'Home',
              Menu: 'Menu',
            },
          },
          Account: 'Account',
        },
      },
      AuthStackNavigator: {
        screens: {
          SignIn: 'SignIn',
          SignUp: 'SignUp',
        },
      },
    },
  },
};

export default linking;
