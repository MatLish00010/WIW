import { View as DefaultView } from 'react-native';
import { ThemeProps } from '@myapp/theme/types';

export type ViewProps = ThemeProps & DefaultView['props'];
