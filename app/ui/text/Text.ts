import styled, { css } from 'styled-components/native';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

enum Variants {
  ERROR = 'Error',
}

type Variant = {
  variant?: Variants;
};

type Props = Variant & SpaceProps & TypographyProps;

const Text = styled.Text<Props>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  ${props => {
    switch (props.variant) {
      case Variants.ERROR:
        return css`
          color: ${({ theme }) => theme.colors.error};
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.text};
        `;
    }
  }}
  ${space};
  ${typography}
`;

export default Text;
