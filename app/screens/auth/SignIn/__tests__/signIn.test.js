import { render, screen, fireEvent, act } from '@testing-library/react-native';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';
import SignIn from '@myapp/screens/auth/SignIn';
import { useSignIn } from '@myapp/screens/auth/SignIn/query';

jest.mock('@myapp/screens/auth/SignIn/query');

const errorTextEmail = /Email must be a valid email address/i;
const errorTextPass = /Min length 8 characters/i;

describe('Sign in screen test', () => {
  beforeEach(() => {
    useSignIn.mockReturnValue({
      isLoading: false,
      mutateAsync: jest.fn(),
    });
  });
  test('Screen is correct', () => {
    render(testingWrapper(<SignIn />));

    expect(screen.getByTestId('label')).toHaveTextContent(/Sign In/i);
    screen.getByPlaceholderText(/Email/i);
    expect(screen.queryByText(errorTextEmail)).not.toBeTruthy();
    screen.getByPlaceholderText(/Password/i);
    expect(screen.queryByText(errorTextPass)).not.toBeTruthy();
    expect(screen.getByTestId('signIn-btn')).toHaveTextContent(/Sign In/i);
    expect(screen.getByTestId('signUp-btn')).toHaveTextContent(/Sign Up/i);
  });
  test('Test inputs', () => {
    render(testingWrapper(<SignIn />));

    const email = screen.getByPlaceholderText(/Email/i);

    expect(email.props.value).toBe('');
    fireEvent.changeText(email, 'test@test.com');
    expect(email.props.value).toBe('test@test.com');

    const pass = screen.getByPlaceholderText(/Password/i);

    expect(pass.props.value).toBe('');
    fireEvent.changeText(pass, '11111111');
    expect(pass.props.value).toBe('11111111');
  });
  test('Validation form', async () => {
    render(testingWrapper(<SignIn />));

    const signInBtn = screen.getByTestId('signIn-btn');

    await act(async () => fireEvent.press(signInBtn));

    const email = screen.getByPlaceholderText(/Email/i);
    const pass = screen.getByPlaceholderText(/Password/i);

    expect(email.props.value).toBe('');
    expect(pass.props.value).toBe('');

    expect(screen.queryByText(errorTextEmail)).toBeTruthy();
    expect(screen.queryByText(errorTextPass)).toBeTruthy();

    await act(async () => fireEvent.changeText(email, 'test@test'));

    expect(screen.queryByText(errorTextEmail)).toBeTruthy();
    expect(screen.queryByText(errorTextPass)).toBeTruthy();

    await act(async () => fireEvent.changeText(email, 'test@test.com'));

    expect(screen.queryByText(errorTextEmail)).not.toBeTruthy();
    expect(screen.queryByText(errorTextPass)).toBeTruthy();

    await act(async () => fireEvent.changeText(pass, '1111111'));

    expect(screen.queryByText(errorTextEmail)).not.toBeTruthy();
    expect(screen.queryByText(errorTextPass)).toBeTruthy();

    await act(async () => fireEvent.changeText(pass, '11111111'));

    expect(screen.queryByText(errorTextEmail)).not.toBeTruthy();
    expect(screen.queryByText(errorTextPass)).not.toBeTruthy();
  });
  test('Screen loading', () => {
    useSignIn.mockReturnValue({
      isLoading: true,
      mutateAsync: jest.fn(),
    });
    render(testingWrapper(<SignIn />));

    expect(screen.getByTestId('loading')).toBeTruthy();
    expect(screen.queryByTestId('signIn-screen')).not.toBeTruthy();
  });
  afterAll(() => {
    jest.unmock('@myapp/screens/auth/SignIn/query');
  });
});
