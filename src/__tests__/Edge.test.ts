import { Node, Edge } from '../index';

test('Edge Creation', () => {
  var edge = new Edge("this", "isa", "that")
  expect(edge.subject).toBe("this");
  expect(edge.predicate).toBe("isa");
  expect(edge.object).toBe("that");
  expect(edge.qualifiers).toStrictEqual([]);
});
