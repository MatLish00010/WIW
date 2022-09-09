import { render, screen } from '@testing-library/react-native';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';
import AuthStackNavigator from '@myapp/navigation/AuthStack';

describe('Auth stack test', () => {
  test('Initial screen is Sign In', () => {
    render(testingWrapper(<AuthStackNavigator />));
    expect(screen.getByTestId('signIn-screen')).toBeTruthy();
  });
});
