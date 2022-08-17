import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '@myapp/navigation/types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Tabs: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Menu: {
            screens: {
              Menu: 'menu',
            },
          },
        },
      },
      SelectedItems: 'selectedItems',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
