import { FC } from 'react';

import { UIViewContainer } from '@myapp/ui/View';
import { UIButton, UIButtonText } from '@myapp/ui/Button';
import { HomeProps } from '@myapp/navigation/HomeStack/types';

const Home: FC<HomeProps<'Home'>> = ({ navigation }) => {
  return (
    <UIViewContainer testID="home-page">
      <UIButton testID="menu-button" onPress={() => navigation.navigate('Menu')}>
        <UIButtonText>Menu</UIButtonText>
      </UIButton>
    </UIViewContainer>
  );
};

export default Home;
