import HomeStackNavigator from '@myapp/navigation/HomeStack';
import { render, fireEvent } from '@testing-library/react-native';
import { screen } from '@testing-library/react-native';

import renderWithTheme from '@myapp/utils/tests/renderWithTheme';
import renderWithProvider from '@myapp/utils/tests/renderWithProvider';

describe('Home Stack Test', () => {
  test('Initial Page is Home', () => {
    render(renderWithTheme(renderWithProvider(<HomeStackNavigator />)));
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeTruthy();
  });
  test('Screen transition to menu page works', async () => {
    render(renderWithTheme(renderWithProvider(<HomeStackNavigator />)));
    const menuButton = screen.getByTestId('menu-button');

    fireEvent.press(menuButton);
    const menuPage = await screen.findByTestId('menu-page');

    expect(menuPage).toBeTruthy();
  });
});
