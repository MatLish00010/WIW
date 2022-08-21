import { View as DefaultView } from 'react-native';
import { useThemeColor } from '@myapp/theme/hooks';
import { ViewProps } from '@myapp/theme/View/types';

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const ViewContainerCenter = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <DefaultView
      style={[
        { backgroundColor },
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
        style,
      ]}
      {...otherProps}
    />
  );
};

export const ViewContainer = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <DefaultView
      style={[
        { backgroundColor },
        {
          flex: 1,
          padding: 40,
        },
        style,
      ]}
      {...otherProps}
    />
  );
};
