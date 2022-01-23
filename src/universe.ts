import { Node } from './node';
import { Edge, IQualifier } from './edge';

interface IGraph {
  nodes: Node[];
  edges: Edge[];
}

export class Universe {
  graph: IGraph;
  history: IGraph;

  constructor() {
    this.graph = { nodes: [], edges: [] };
    this.history = { nodes: [], edges: [] };
  }

  addNode() {
    const node = new Node();
    this.graph.nodes.push(node);
    return node.id;
  }

  addEdge(
    subject: string,
    predicate: string,
    object: string,
    qualifiers: IQualifier[] = []) {
    const edge = new Edge(
      subject,
      predicate,
      object,
      qualifiers
    );
    this.graph.edges.push(edge);
    return edge.id;
  }

  // universe.toYML() - this can be unit tested

  // save() to save entire graph (to a file for now) - this can't be unit tested

  // load () to construct entire graph (from a file for now) - this can't be unit tested

}
