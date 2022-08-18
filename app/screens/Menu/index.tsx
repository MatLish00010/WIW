import { FC } from 'react';

import { View } from '@myapp/theme/View';
import { Text } from '@myapp/theme/Text';
import { MenuScreenProps } from '@myapp/screens/Menu/types';

const Menu: FC<MenuScreenProps> = () => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;
