import { FC } from 'react';
import { ActivityIndicator, ImageBackground, ListRenderItem } from 'react-native';

import { MenuScreenProps } from '@myapp/screens/Menu/types';
import { ViewContainer } from '@myapp/ui';
import useKitchens from '@myapp/query/useKitchens';
import { palette } from '@myapp/ui/Theme';
import { Kitchen } from '@myapp/firebase/api/kitchen/types';

import * as S from './styled';

const Menu: FC<MenuScreenProps<'Menu'>> = () => {
  const { isLoading, data } = useKitchens();

  const flatListData = data.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
  }));

  const menuItem: ListRenderItem<Kitchen> = ({ item }) => (
    <S.MenuItem testID="kitchen-item">
      <ImageBackground
        source={{ uri: item.image }}
        imageStyle={{
          backgroundColor: 'black',
          borderRadius: 10,
        }}
        resizeMode="cover"
      >
        <S.MenuItemBtn onPress={() => console.log(item.name)}>
          <S.MenuItemBtnText>{item.name}</S.MenuItemBtnText>
        </S.MenuItemBtn>
      </ImageBackground>
    </S.MenuItem>
  );

  if (isLoading) {
    return (
      <ViewContainer testID="loading" width="100%" alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </ViewContainer>
    );
  }

  return (
    <ViewContainer testID="menu-screen" p={0}>
      <S.MenuList
        testID="kitchens-list"
        data={flatListData}
        renderItem={menuItem}
        keyExtractor={(item: Kitchen) => item.id}
      />
    </ViewContainer>
  );
};

export default Menu;
