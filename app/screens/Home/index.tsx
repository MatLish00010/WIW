import { FC } from 'react';

import { HomeProps } from '@myapp/navigation/HomeStack/types';
import { ViewContainer, Button, ButtonText } from '@myapp/ui';

const Home: FC<HomeProps<'Home'>> = ({ navigation }) => {
  return (
    <ViewContainer testID="home-screen">
      <Button testID="menu-btn" onPress={() => navigation.navigate('Menu')}>
        <ButtonText>Menu</ButtonText>
      </Button>
    </ViewContainer>
  );
};

export default Home;
