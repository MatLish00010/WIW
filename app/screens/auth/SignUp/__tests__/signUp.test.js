import { render, screen, fireEvent, act } from '@testing-library/react-native';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';
import { useSignUp } from '@myapp/screens/auth/SignUp/query';
import SignUp from '@myapp/screens/auth/SignUp';

jest.mock('@myapp/screens/auth/SignUp/query');

const errorTextEmail = /Email must be a valid email address/i;
const errorTextPass = /Min length 8 characters/i;

describe('Sign up screen test', () => {
  beforeEach(() => {
    useSignUp.mockReturnValue({
      isLoading: false,
      mutateAsync: jest.fn(),
    });
  });
  test('Screen is correct', () => {
    render(testingWrapper(<SignUp />));

    expect(screen.getByTestId('label')).toHaveTextContent(/Sign Up/i);
    screen.getByPlaceholderText(/Email/i);
    expect(screen.queryByText(errorTextEmail)).not.toBeTruthy();
    screen.getByPlaceholderText(/Password/i);
    expect(screen.queryByText(errorTextPass)).not.toBeTruthy();
    expect(screen.getByTestId('signUp-btn')).toHaveTextContent(/Sign Up/i);
  });
  test('Test inputs', () => {
    render(testingWrapper(<SignUp />));

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
    render(testingWrapper(<SignUp />));

    const signUpBtn = screen.getByTestId('signUp-btn');

    await act(async () => fireEvent.press(signUpBtn));

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
    useSignUp.mockReturnValue({
      isLoading: true,
      mutateAsync: jest.fn(),
    });
    render(testingWrapper(<SignUp />));

    expect(screen.getByTestId('loading')).toBeTruthy();
    expect(screen.queryByTestId('signUp-screen')).not.toBeTruthy();
  });
  afterAll(() => {
    jest.unmock('@myapp/screens/auth/SignUp/query');
  });
});
