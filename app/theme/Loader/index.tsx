import { ActivityIndicator as DefaultActivityIndicator } from 'react-native';
import { useThemeColor } from '@myapp/theme/hooks';
import { ActivityIndicatorProps } from '@myapp/theme/Loader/types';

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const { style, lightColor, darkColor, size, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'activityIndicator');

  return <DefaultActivityIndicator size={size || 'large'} color={color} style={[{ ...otherProps }]} />;
};
