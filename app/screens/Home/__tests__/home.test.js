import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';

import renderWithTheme from '@myapp/utils/tests/renderWithTheme';

import Home from '@myapp/screens/Home';
import renderWithAllWrappers from '@myapp/utils/tests/renderWithAllWrappers';
import HomeStackNavigator from '@myapp/navigation/HomeStack';

describe('Home Screen Test', () => {
  test('Screen is correct', () => {
    const tree = renderer.create(renderWithTheme(<Home />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Menu button redirects to menu', () => {
    render(renderWithAllWrappers(<HomeStackNavigator />));

    const menuBtn = screen.getByTestId('menu-btn');
    fireEvent.press(menuBtn);

    expect(screen.getByTestId('menu-screen')).toBeTruthy();
  });
});
