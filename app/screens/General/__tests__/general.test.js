import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import General from '@myapp/screens/General';
import testingWrapper from '@myapp/utils/tests/tistingWrapper';

describe('General Screen Test', () => {
  test('Screen is correct', () => {
    const tree = renderer.create(testingWrapper(<General />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Text in buttons', () => {
    render(testingWrapper(<General />));
    expect(screen.getByTestId('menu-btn')).toHaveTextContent(/Menu/i);
  });
});
