import Account from '@myapp/screens/Account';
import renderWithAllWrappers from '@myapp/utils/tests/renderWithAllWrappers';
import { render, cleanup } from '@testing-library/react-native';

describe('Account Page Test', () => {
  test('Page is correct', () => {
    render(renderWithAllWrappers(<Account />));
  });
  afterEach(cleanup);
});
