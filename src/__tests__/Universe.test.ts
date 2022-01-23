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
  expect(universe.graph.nodes).toHaveLength(1)
});

test('Universe.addEdge()', () => {
  const universe = new Universe();
  const res = universe.addEdge(
    "this", "isa", "that",
    [{qualifier: "on", target: "here"}]
  )
  expect(res).toEqual(expect.not.stringMatching(uuid_re));
  expect(universe.graph.edges).toHaveLength(1)
});
