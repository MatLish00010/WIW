import { color, ColorProps, typography, TypographyProps } from 'styled-system';
import styled from 'styled-components/native';
import { fontSize } from '@myapp/ui/Theme';

type TextProps = TypographyProps & ColorProps;

const ButtonText = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${fontSize.M};
  ${typography}
  ${color}
`;

export default ButtonText;
