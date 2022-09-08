import { render, fireEvent, screen } from '@testing-library/react-native';
import renderWithAllWrappers from '@myapp/utils/tests/renderWithAllWrappers';
import RootTabs from '@myapp/navigation/RootBottomTabs/index';

describe('Root Tabs Test', () => {
  test('Initial screen is Home', () => {
    render(renderWithAllWrappers(<RootTabs />));
    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });
  test('Tab Home redirects to home screen', () => {
    render(renderWithAllWrappers(<RootTabs />));

    const homeTab = screen.getByTestId('tab-home');
    fireEvent.press(homeTab);

    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });
  test('Tab Account redirects to Account screen', () => {
    render(renderWithAllWrappers(<RootTabs />));

    const accountTab = screen.getByTestId('tab-account');
    fireEvent.press(accountTab);

    expect(screen.getByTestId('account-screen')).toBeTruthy();
  });
});
