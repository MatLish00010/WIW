export const tintColorLight = '#2f95dc';
export const tintColorDark = '#fff';

export const palette = {
  black: '#000',
  white: '#fff',
  blue: '#2f95dc',
  red: '#eb0a3c',
  grey: '#65737e',
};

export const spacing = {
  S: '8px',
  M: '16px',
  L: '24px',
  XL: '32px',
  XXL: '40px',
};

export const fontSize = {
  S: '8px',
  M: '16px',
  L: '24px',
  XL: '32px',
  XXL: '40px',
};

export const theme = {
  colors: {
    text: palette.black,
    background: palette.white,
    buttonText: palette.white,
    buttonBackground: palette.blue,
    disabledButtonBackground: palette.grey,
    error: palette.red,
    borderColor: palette.black,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: palette.white,
    background: palette.black,
    borderColor: palette.white,
  },
};
