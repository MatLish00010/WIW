import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { RootTabParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<RootTabParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      HomeStack: {
        screens: {
          Home: 'home',
          Menu: 'menu',
        },
      },
    },
  },
};

export default linking;
