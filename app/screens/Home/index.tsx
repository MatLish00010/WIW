import { View } from '@myapp/theme/View';
import { ButtonText } from '@myapp/theme/Text';
import { gStyles } from '@myapp/layout/styles';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { RootTabScreenProps } from '@myapp/navigation/types';

const Home = ({ navigation }: RootTabScreenProps<'Home'>) => {
  const navigateToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={gStyles.container}>
      <TouchableOpacity onPress={navigateToMenu}>
        <ButtonText>Menu</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
