import { create, act } from 'react-test-renderer';
import Account from '@myapp/screens/Account';
import renderWithAllWrappers from '@myapp/utils/tests/renderWithAllWrappers';
import { renderHook, render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react-native';
import useUser from '@myapp/hooks/useUser';
import SignIn from '@myapp/screens/auth/SignIn';

describe('Account Page Test', () => {
  test('Page is correct', async () => {
    render(renderWithAllWrappers(<Account />));

    // const query = renderHook(() => useUser());
    // console.log('query:', query);
  });
  afterEach(cleanup);
});
