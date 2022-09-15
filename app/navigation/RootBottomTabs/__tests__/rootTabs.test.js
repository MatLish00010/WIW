import { render, fireEvent, screen } from '@testing-library/react-native';
import RootTabs from '@myapp/navigation/RootBottomTabs';
import useUser from '@myapp/hooks/useUser';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';

jest.mock('@myapp/hooks/useUser');

describe('Root Tabs Test', () => {
  test('Initial screen is General', () => {
    render(testingWrapper(<RootTabs />));
    expect(screen.getByTestId('general-screen')).toBeTruthy();
  });
  test('Tab General redirects to home screen', () => {
    render(testingWrapper(<RootTabs />));

    const generalTab = screen.getByTestId('tab-general');
    fireEvent.press(generalTab);

    expect(screen.getByTestId('general-screen')).toBeTruthy();
  });
  test('Tab Account redirects to Account screen for not registered user', () => {
    useUser.mockReturnValue({
      user: null,
    });

    render(testingWrapper(<RootTabs />));

    const accountTab = screen.getByTestId('tab-account');
    fireEvent.press(accountTab);

    expect(screen.getByTestId('account-screen-user-is-not-registered')).toBeTruthy();
  });
  test('Tab Account redirects to Account screen for registered user', () => {
    useUser.mockReturnValue({
      user: {
        email: 'xxx@xxx.xxx',
      },
    });

    render(testingWrapper(<RootTabs />));

    const accountTab = screen.getByTestId('tab-account');
    fireEvent.press(accountTab);

    expect(screen.getByTestId('account-screen-user-is-registered')).toBeTruthy();
  });
  afterAll(() => {
    jest.unmock('@myapp/hooks/useUser');
  });
});
