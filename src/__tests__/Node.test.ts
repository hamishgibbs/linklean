import { Node } from '../index';

test('Node Creation', () => {
  expect(Node('Arnold Schwarzenneger', 'Person')).toBe('Arnold Schwarzenneger');
});
