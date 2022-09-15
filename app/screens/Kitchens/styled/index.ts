import styled from 'styled-components/native';
import { palette, spacing } from '@myapp/ui/Theme';

export const List = styled.FlatList`
  padding: ${spacing.M};
`;

export const Item = styled.View`
  margin-bottom: ${spacing.XL};
  border-radius: 20px;
`;

export const ItemBtn = styled.TouchableOpacity`
  padding: ${spacing.XL};
  background-color: #00000c79;
  align-items: center;
  border-radius: 10px;
  color: ${palette.white};
`;

export const ItemBtnText = styled.Text`
  color: ${palette.white};
  font-weight: 500;
  text-transform: uppercase;
`;
