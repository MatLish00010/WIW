import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { RootTabParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<RootTabParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      HomeStack: {
        screens: {
          Home: 'Home',
          Menu: 'Menu',
        },
      },
      Account: {
        screens: {
          Account: 'Account',
        },
      },
    },
  },
};

export default linking;
