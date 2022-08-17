import { View } from '@myapp/theme/View';
import { ButtonText } from '@myapp/theme/Text';
import { gStyles } from '@myapp/layout/styles';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { RootTabScreenProps } from '@myapp/navigation/types';

const Home = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={gStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <ButtonText>Menu</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SelectedItems')}>
        <ButtonText>Selected Items</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
