import styled from 'styled-components/native';
import { flexbox, FlexboxProps, width, WidthProps } from 'styled-system';

type Props = FlexboxProps & WidthProps;

const View = styled.View<Props>`
  height: 100%;
  ${flexbox}
  ${width}
`;

export default View;
