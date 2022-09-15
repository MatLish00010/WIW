import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { StackParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<StackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          GeneralStackNavigator: {
            screens: {
              General: 'General',
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
