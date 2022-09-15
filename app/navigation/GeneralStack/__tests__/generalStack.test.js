import GeneralStackNavigator from '@myapp/navigation/GeneralStack';
import { render, screen } from '@testing-library/react-native';

import testingWrapper from '@myapp/utils/tests/tistingWrapper';

describe('General Stack Test', () => {
  test('Initial Screen is General', () => {
    render(testingWrapper(<GeneralStackNavigator />));
    expect(screen.getByTestId('general-screen')).toBeTruthy();
  });
});
