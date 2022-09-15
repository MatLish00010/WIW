import { FC } from 'react';
import { MenuStackProps } from '@myapp/navigation/MenuStack/types';
import { Text } from '@myapp/ui';

const Menu: FC<MenuStackProps<'Menu'>> = ({ route }) => {
  const currentKitchen = route.params.kitchen;

  return <Text>Current Kitchen: {currentKitchen}</Text>;
};

export default Menu;
