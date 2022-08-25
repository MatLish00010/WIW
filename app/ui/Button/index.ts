import styled, { css } from 'styled-components/native';
import { fontSize, spacing } from '../Theme';
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  width,
  WidthProps,
  color,
  ColorProps,
} from 'styled-system';

type TextProps = TypographyProps & ColorProps;

export const UIButtonText = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${fontSize.M};
  ${typography}
  ${color}
`;

enum ButtonVariants {
  ERROR = 'Error',
  CLEAR = 'Clear',
}

type ButtonProps = { variant?: ButtonVariants } & SpaceProps & FlexboxProps & WidthProps;

export const UIButton = styled.TouchableOpacity<ButtonProps>`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;
