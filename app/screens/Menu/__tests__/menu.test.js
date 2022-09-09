import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import Menu from '@myapp/screens/Menu';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';

describe('Menu Test', () => {
  test('Page is correct', () => {
    render(testingWrapper(<Menu />));

    const tree = renderer.create(testingWrapper(<Menu />)).toJSON();

    screen.getByTestId(/Menu/i);

    expect(tree).toMatchSnapshot();
  });
});
