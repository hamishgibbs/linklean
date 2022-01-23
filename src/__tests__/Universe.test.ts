import { uuid_re } from './fixtures/utils';
import { Universe } from '../universe';

test('Universe Creation', () => {
  const universe = new Universe();
  expect(universe.graph).toStrictEqual({ nodes: {}, edges: {} });
  expect(universe.history).toStrictEqual({ nodes: {}, edges: {} });
});

test('Universe.addNode()', () => {
  const universe = new Universe();
  const res = universe.addNode()
  expect(res).toEqual(expect.not.stringMatching(uuid_re));
  expect(universe.graph.nodes).toHaveProperty(res);
});

test('Universe.addEdge()', () => {
  const universe = new Universe();
  const res = universe.addEdge('this', 'isa', 'that', [{ qualifier: 'on', target: 'here' }]);
  expect(res).toEqual(expect.not.stringMatching(uuid_re));
  expect(universe.graph.edges).toHaveProperty(res);
});

test('Universe.toYAML()', () => {
  const universe = new Universe();
  const res = universe.toYAML();
  const expected = 'graph:\n  nodes: {}\n  edges: {}\nhistory:\n  nodes: {}\n  edges: {}\n';
  expect(res).toBe(expected);
});

test('Universe.fromYAML()', () => {
  const universe = new Universe();
  const document = 'graph:\n  nodes: []\n  edges: []\nhistory:\n  nodes: []\n  edges: []\n';
  universe.fromYAML(document);
  expect(universe.graph).toStrictEqual({ edges: [], nodes: [] });
  expect(universe.history).toStrictEqual({ edges: [], nodes: [] });
});
