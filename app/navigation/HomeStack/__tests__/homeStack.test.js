import HomeStackNavigator from '@myapp/navigation/HomeStack';
import { render, screen } from '@testing-library/react-native';

import renderWithTheme from '@myapp/utils/tests/renderWithTheme';
import renderWithProvider from '@myapp/utils/tests/renderWithProvider';

describe('Home Stack Test', () => {
  test('Initial Page is Home', () => {
    render(renderWithTheme(renderWithProvider(<HomeStackNavigator />)));
    const homePage = screen.getByTestId('home-screen');
    expect(homePage).toBeTruthy();
  });
});
