import styled, { css } from 'styled-components/native';
import { flexbox, FlexboxProps, space, SpaceProps, width, WidthProps } from 'styled-system';
import { spacing } from '@myapp/ui/Theme';
import { TouchableOpacityProps } from 'react-native';

enum ButtonVariants {
  ERROR = 'Error',
  CLEAR = 'Clear',
}

type ButtonProps = { variant?: ButtonVariants } & SpaceProps & FlexboxProps & WidthProps & TouchableOpacityProps;

const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props?.disabled ? props.theme.colors.disabledButtonBackground : '')};

  ${space};
  ${flexbox}
  ${width}

  ${props => {
    switch (props.variant) {
      case ButtonVariants.ERROR:
        return css`
          background-color: ${({ theme }) => theme.colors.error};
          padding: ${spacing.M} ${spacing.L};
        `;
      case ButtonVariants.CLEAR:
        return css`
          color: red;
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.buttonBackground};
          padding: ${spacing.M} ${spacing.L};
        `;
    }
  }}

  ${props => {
    if (props?.disabled) {
      return css`
        background-color: ${({ theme }) => theme.colors.disabledButtonBackground};
      `;
    }
  }}
`;

export default Button;
