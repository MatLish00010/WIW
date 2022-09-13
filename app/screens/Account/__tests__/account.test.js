import { render, screen } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Account from '@myapp/screens/Account';
import useUser from '@myapp/hooks/useUser';
import useLogout from '@myapp/query/useLogout';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';

jest.mock('@myapp/hooks/useUser');
jest.mock('@myapp/query/useLogout');

describe('Account screen test', () => {
  beforeEach(() => {
    useUser.mockReturnValue({
      user: null,
    });

    useLogout.mockReturnValue({
      isLoading: false,
      mutateAsync: jest.fn(),
    });
  });

  test('Screen for user not registered', () => {
    useUser.mockReturnValue({
      user: null,
    });

    render(testingWrapper(<Account />));

    const tree = renderer.create(testingWrapper(<Account />)).toJSON();

    const signInBtn = screen.getByTestId('signIn-btn');

    expect(screen.getByTestId('account-screen-user-is-not-registered')).toBeTruthy();
    screen.getByText(/You must be logged in to access your account./i);

    expect(signInBtn).toBeTruthy();
    expect(signInBtn).toHaveTextContent(/Sign In/i);

    expect(tree).toMatchSnapshot();
  });

  test('Screen for user registered', () => {
    useUser.mockReturnValue({
      user: {
        email: 'xxx@xxx.xxx',
      },
    });

    render(testingWrapper(<Account />));
    const tree = renderer.create(testingWrapper(<Account />)).toJSON();

    expect(screen.getByTestId('account-screen-user-is-registered')).toBeTruthy();

    const logoutBtn = screen.getByTestId('logout-btn');
    expect(logoutBtn).toBeTruthy();
    expect(logoutBtn).toHaveTextContent(/logout/i);

    screen.getByText(/Account/i);
    screen.getByText(/Email:/i);

    expect(tree).toMatchSnapshot();
  });

  test('Screen is loading', () => {
    useLogout.mockReturnValue({
      isLoading: true,
      mutateAsync: jest.fn(),
    });

    render(testingWrapper(<Account />));
    const tree = renderer.create(testingWrapper(<Account />)).toJSON();

    expect(screen.getByTestId('loading')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  afterAll(() => {
    jest.unmock('@myapp/hooks/useUser');
    jest.unmock('@myapp/query/useLogout');
  });
});
