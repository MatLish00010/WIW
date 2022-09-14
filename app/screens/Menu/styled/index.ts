import styled from 'styled-components/native';
import { palette, spacing } from '@myapp/ui/Theme';

export const MenuList = styled.FlatList`
  padding: ${spacing.M};
`;

export const MenuItem = styled.View`
  margin-bottom: ${spacing.XL};
  border-radius: 20px;
`;

export const MenuItemBtn = styled.TouchableOpacity`
  padding: ${spacing.XL};
  background-color: #00000c79;
  align-items: center;
  border-radius: 10px;
  color: ${palette.white};
`;

export const MenuItemBtnText = styled.Text`
  color: ${palette.white};
  font-weight: 500;
  text-transform: uppercase;
`;
