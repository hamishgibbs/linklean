import { uuid_re } from './fixtures/utils';
import { Node } from '../node';

test('Node Creation', () => {
  const node = new Node();
  expect(node.id).toEqual(expect.not.stringMatching(uuid_re));
});
