import { uuid_re } from './fixtures/utils';
import { Universe } from '../universe';

test('Universe Creation', () => {
  const universe = new Universe();
  expect(universe.graph).toStrictEqual({ nodes: [], edges: [] });
  expect(universe.history).toStrictEqual({ nodes: [], edges: [] });
});

test('Universe.addNode()', () => {
  const universe = new Universe();
  expect(universe.addNode()).toEqual(expect.not.stringMatching(uuid_re));
});
