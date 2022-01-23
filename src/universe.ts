import { Node } from './node';
import { Edge } from './edge';

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
}
