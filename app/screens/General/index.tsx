import { FC } from 'react';

import { GeneralProps } from '@myapp/navigation/GeneralStack/types';
import { ViewContainer, Button, ButtonText } from '@myapp/ui';

const General: FC<GeneralProps<'General'>> = ({ navigation }) => {
  return (
    <ViewContainer testID="general-screen">
      <Button testID="menu-btn" onPress={() => navigation.navigate('MenuStackNavigator', { screen: 'Kitchens' })}>
        <ButtonText>Menu</ButtonText>
      </Button>
    </ViewContainer>
  );
};

export default General;
