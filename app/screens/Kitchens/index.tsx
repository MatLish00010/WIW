import { FC } from 'react';
import { ActivityIndicator, ImageBackground, ListRenderItem } from 'react-native';

import { ViewContainer } from '@myapp/ui';
import useKitchens from '@myapp/query/useKitchens';
import { palette } from '@myapp/ui/Theme';
import { Kitchen } from '@myapp/firebase/api/kitchen/types';

import * as S from './styled';
import { MenuStackProps } from '@myapp/navigation/MenuStack/types';

const Kitchens: FC<MenuStackProps<'Kitchens'>> = ({ navigation }) => {
  const { isLoading, data } = useKitchens();

  const flatListData = data.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
  }));

  const renderItem: ListRenderItem<Kitchen> = ({ item }) => (
    <S.Item testID="kitchen-item">
      <ImageBackground
        source={{ uri: item.image }}
        imageStyle={{
          backgroundColor: 'black',
          borderRadius: 10,
        }}
        resizeMode="cover"
      >
        <S.ItemBtn onPress={() => navigation.navigate('Menu', { kitchen: item.name })}>
          <S.ItemBtnText>{item.name}</S.ItemBtnText>
        </S.ItemBtn>
      </ImageBackground>
    </S.Item>
  );

  if (isLoading) {
    return (
      <ViewContainer testID="loading" width="100%" alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={palette.blue} />
      </ViewContainer>
    );
  }

  return (
    <ViewContainer testID="kitchens-screen" p={0}>
      <S.List
        testID="kitchens-list"
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item: Kitchen) => item.id}
      />
    </ViewContainer>
  );
};

export default Kitchens;
