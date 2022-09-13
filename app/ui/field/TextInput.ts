import styled from 'styled-components/native';
import { palette, spacing } from '@myapp/ui/Theme';
import { space, SpaceProps } from 'styled-system';

type Props = SpaceProps;

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: palette.grey,
})<Props>`
  color: ${({ theme }) => theme.colors.text};
  border-bottom-color: ${({ theme }) => theme.colors.borderColor};
  border-bottom-width: 2px;
  width: 100%;
  padding: ${spacing.S} 0;
  ${space}
`;

export default TextInput;
