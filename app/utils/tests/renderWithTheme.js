import { ThemeManager } from '@myapp/ui/ThemeManager';

const renderWithTheme = children => {
  return <ThemeManager>{children}</ThemeManager>;
};

export default renderWithTheme;
