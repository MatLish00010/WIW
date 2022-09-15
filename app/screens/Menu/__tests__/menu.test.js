import { render, screen } from '@testing-library/react-native';

import Menu from '@myapp/screens/Menu';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';
import useKitchens from '@myapp/query/useKitchens';
import { kitchens } from '@myapp/screens/Menu/mockData/kitchens';

jest.mock('@myapp/query/useKitchens');

describe('Menu Test', () => {
  beforeEach(() => {
    useKitchens.mockReturnValue({
      data: [],
      isLoading: true,
    });
  });
  test('Screen is loading', () => {
    render(testingWrapper(<Menu />));
    expect(screen.getByTestId('loading')).toBeTruthy();
  });
  test('Screen with data', () => {
    useKitchens.mockReturnValue({
      data: kitchens,
      isLoading: false,
    });
    render(testingWrapper(<Menu />));

    const kitchensList = screen.getByTestId('kitchens-list');

    expect(kitchensList).toBeTruthy();

    expect(screen.getAllByTestId('kitchen-item').length).toBe(2);

    expect(screen.getByText('test1')).toBeTruthy();
    expect(screen.getByText('test2')).toBeTruthy();
  });
  afterAll(() => {
    jest.unmock('@myapp/query/useKitchens');
  });
});
