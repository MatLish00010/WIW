import { FC } from 'react';

import { MenuScreenProps } from '@myapp/screens/Menu/types';
import { Text, ViewContainer } from '@myapp/ui';

const Menu: FC<MenuScreenProps<'Menu'>> = () => {
  return (
    <ViewContainer testID="menu-screen">
      <Text>Menu</Text>
    </ViewContainer>
  );
};

export default Menu;
