import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { ButtonText } from '@myapp/theme/Text';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Home/styles';
import { HomeScreenProps } from '@myapp/screens/Home/types';

const Home: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ViewContainer style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <ButtonText>Menu</ButtonText>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default Home;
