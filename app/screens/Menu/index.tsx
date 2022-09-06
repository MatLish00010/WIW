import { FC } from 'react';

import { UIViewContainer } from '@myapp/ui/View';
import { UIText } from '@myapp/ui/Text';
import { MenuScreenProps } from '@myapp/screens/Menu/types';

const Menu: FC<MenuScreenProps<'Menu'>> = () => {
  return (
    <UIViewContainer testID="menu-page">
      <UIText>Menu</UIText>
    </UIViewContainer>
  );
};

export default Menu;
