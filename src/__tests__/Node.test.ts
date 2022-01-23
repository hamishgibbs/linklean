import { Node, Edge } from '../index';

test('Node Creation', () => {
  var node = new Node()
  expect(node).toBe('Arnold Schwarzenneger');
});

test('Edge Creation', () => {
  var edge = new Edge("this", "isa", "that")
  expect(edge).toBe('Arnold Schwarzenneger');
});
