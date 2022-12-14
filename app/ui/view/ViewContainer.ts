import styled from 'styled-components/native';
import { spacing } from '@myapp/ui/Theme';
import { flexbox, FlexboxProps, width, WidthProps } from 'styled-system';

type Props = FlexboxProps & WidthProps;

const ViewContainer = styled.View<Props>`
  padding: ${spacing.XXL} ${spacing.L} ${spacing.XL} ${spacing.L};
  height: 100%;
  ${flexbox}
  ${width}
`;

export default ViewContainer;
