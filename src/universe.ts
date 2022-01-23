import { Node } from './node';
import { Edge, IQualifier } from './edge';
import * as yaml from 'js-yaml';
import { writeFileSync, readFileSync } from 'fs';

interface IGraph {
  nodes: Node[];
  edges: Edge[];
}

interface IUniverse {
  graph: IGraph;
  history: IGraph;
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

  addEdge(subject: string, predicate: string, object: string, qualifiers: IQualifier[] = []) {
    const edge = new Edge(subject, predicate, object, qualifiers);
    this.graph.edges.push(edge);
    return edge.id;
  }

  toYAML() {
    return yaml.dump({ graph: this.graph, history: this.history });
  }

  save(fn: string) {
    writeFileSync(fn, this.toYAML());
  }

  fromYAML(doc: string) {
    const data = yaml.load(doc) as IUniverse;
    this.graph = data.graph;
    this.history = data.history;
  }

  load(fn: string) {
    const doc = readFileSync(fn, 'utf8');
    this.fromYAML(doc);
  }

  // remove entity
  // remove node
  // remove edge

  // building & versioning
}
