import { Text as DefaultText } from 'react-native';

import { ThemeProps } from '@myapp/theme/types';

export type TextProps = ThemeProps & DefaultText['props'];
