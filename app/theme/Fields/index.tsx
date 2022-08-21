import { TextInput as DefaultTextInput } from 'react-native';

import { TextInputProps } from '@myapp/theme/Fields/types';
import { useThemeColor } from '@myapp/theme/hooks';

export const TextInput = (props: TextInputProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  const inputPlaceholderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'inputPlaceholderColor');

  return (
    <DefaultTextInput
      style={[{ color, borderColor }, style]}
      placeholderTextColor={inputPlaceholderColor}
      {...otherProps}
    />
  );
};
