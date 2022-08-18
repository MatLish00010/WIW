import { ViewContainer } from '@myapp/theme/View';
import { ButtonText } from '@myapp/theme/Text';
import { HomeScreenProps } from '@myapp/navigation/HomeStack/types';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Home/styles';

const Home = ({ navigation }: HomeScreenProps<'Home'>) => {
  return (
    <ViewContainer style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <ButtonText>Menu</ButtonText>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default Home;
