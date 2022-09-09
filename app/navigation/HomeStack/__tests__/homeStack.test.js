import HomeStackNavigator from '@myapp/navigation/HomeStack';
import { render, screen } from '@testing-library/react-native';

import testingWrapper from '@myapp/utils/tests/tistingWrapper';

describe('Home Stack Test', () => {
  test('Initial Page is Home', () => {
    render(testingWrapper(<HomeStackNavigator />));
    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });
});
