import { Universe } from '../index';

test('Universe Creation', () => {
  var universe = new Universe();
  expect(universe.graph).toStrictEqual({nodes: [], edges: []});
  expect(universe.history).toStrictEqual({nodes: [], edges: []});
});


test('Universe.addNode()', () => {
  const uuid_re = '/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i';
  var universe = new Universe();
  expect(universe.addNode()).toEqual(expect.not.stringMatching(uuid_re));
});
