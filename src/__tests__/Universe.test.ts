import { uuid_re } from './fixtures/utils';
import { Universe } from '../universe';

test('Universe Creation', () => {
  const universe = new Universe();
  expect(universe.graph).toStrictEqual({ nodes: {}, edges: {} });
  expect(universe.history).toStrictEqual({ nodes: {}, edges: {} });
});

test('Universe.addNode()', () => {
  const universe = new Universe();
  const res = universe.addNode();
  expect(res).toEqual(expect.not.stringMatching(uuid_re));
  expect(universe.graph.nodes).toHaveProperty(res);
});

test('Universe.removeNode()', () => {
  const universe = new Universe();
  const nodeId = universe.addNode()
  const res = universe.removeNode(nodeId);
  expect(universe.graph.nodes).not.toHaveProperty(nodeId);
  expect(universe.history.nodes).toHaveProperty(nodeId);
  expect(res).toBe(nodeId)
});

test('Universe.addEdge()', () => {
  const universe = new Universe();
  const res = universe.addEdge('this', 'isa', 'that', [{ qualifier: 'on', target: 'here' }]);
  expect(res).toEqual(expect.not.stringMatching(uuid_re));
  expect(universe.graph.edges).toHaveProperty(res);
});

test('Universe.removeEdge()', () => {
  const universe = new Universe();
  const edgeId = universe.addEdge('this', 'isa', 'that');
  const res = universe.removeEdge(edgeId);
  expect(universe.graph.edges).not.toHaveProperty(edgeId);
  expect(universe.history.edges).toHaveProperty(edgeId);
  expect(res).toBe(edgeId)
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
