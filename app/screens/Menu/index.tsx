import { RootTabScreenProps } from '@myapp/navigation/types';
import { View } from '@myapp/theme/View';
import { Text } from '@myapp/theme/Text';
import { gStyles } from '@myapp/layout/styles';

const Menu = ({ navigation }: RootTabScreenProps<'Menu'>) => {
  return (
    <View style={gStyles.container}>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;
