import { uuid_re } from './fixtures/utils';
import { Node } from '../index';

test('Node Creation', () => {
  var node = new Node();
  expect(node.id).toEqual(expect.not.stringMatching(uuid_re));
});
