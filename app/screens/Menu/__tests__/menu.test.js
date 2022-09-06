import renderer from 'react-test-renderer';
import Menu from '@myapp/screens/Menu';
import renderWithTheme from '@myapp/utils/tests/renderWithTheme';

describe('Menu Test', () => {
  test('Page is correct', () => {
    const tree = renderer.create(renderWithTheme(<Menu />)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
