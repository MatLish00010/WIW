import styled from 'styled-components/native';
import { flexbox, FlexboxProps, width, WidthProps } from 'styled-system';
import { spacing } from '@myapp/ui/Theme';

type Props = FlexboxProps & WidthProps;

export const UIViewContainer = styled.View<Props>`
  padding: ${spacing.XXL} ${spacing.L} ${spacing.XL} ${spacing.L};
  height: 100%;
  ${flexbox}
  ${width}
`;

export const UIView = styled.View<Props>`
  height: 100%;
  ${flexbox}
  ${width}
`;
