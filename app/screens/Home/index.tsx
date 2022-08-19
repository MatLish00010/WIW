import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { ButtonText } from '@myapp/theme/Text';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { styles } from '@myapp/screens/Home/styles';
import { HomeProps } from '@myapp/navigation/HomeStack/types';

const Home: FC<HomeProps<'Home'>> = ({ navigation }) => {
  return (
    <ViewContainer style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'HomeStack',
            params: {
              screen: 'Menu',
            },
          })
        }
      >
        <ButtonText>Menu</ButtonText>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default Home;
