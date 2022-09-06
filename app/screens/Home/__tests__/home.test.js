import renderer from 'react-test-renderer';
import renderWithTheme from '@myapp/utils/tests/renderWithTheme';
import { NavigationContainer } from '@react-navigation/native';

import Home from '@myapp/screens/Home';
import { fireEvent, screen, render } from '@testing-library/react-native';
import Menu from '@myapp/screens/Menu';

describe('Home Page Test', () => {
  test('Page is correct', () => {
    const tree = renderer.create(renderWithTheme(<Home />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Menu button works', async () => {
    const navigate = jest.fn();
    render(
      renderWithTheme(
        <NavigationContainer>
          <Home navigation={{ navigate }} />
          <Menu />
        </NavigationContainer>,
      ),
    );

    const menuButton = screen.getByTestId('menu-button');
    fireEvent.press(menuButton);

    const menuPage = await screen.findByTestId('menu-page');
    expect(menuPage).toBeTruthy();
  });
});
