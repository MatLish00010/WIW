import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import { ThemeProps } from '@myapp/theme/types';

export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
