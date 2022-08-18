import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import { useThemeColor } from '@myapp/theme/hooks';
import { TouchableOpacityProps } from '@myapp/theme/Buttons/types';

export const TouchableOpacity = (props: TouchableOpacityProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');

  return (
    <DefaultTouchableOpacity
      style={[
        { borderColor },
        style,
        {
          borderWidth: 2,
          paddingVertical: 30,
          width: '100%',
          borderRadius: 10,
          alignItems: 'center',
        },
      ]}
      {...otherProps}
    />
  );
};
