import { Text as DefaultText } from 'react-native';

import { useThemeColor } from '@myapp/theme/hooks';
import { TextProps } from '@myapp/theme/Text/types';

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const ButtonText = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultText
      style={[
        { color },
        style,
        {
          textTransform: 'uppercase',
          fontWeight: '600',
        },
      ]}
      {...otherProps}
    />
  );
};
