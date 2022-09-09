import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import Home from '@myapp/screens/Home';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';

describe('Home Screen Test', () => {
  test('Screen is correct', () => {
    const tree = renderer.create(testingWrapper(<Home />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Text in buttons', () => {
    render(testingWrapper(<Home />));
    expect(screen.getByTestId('menu-btn')).toHaveTextContent(/Menu/i);
  });
});
