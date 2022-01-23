import { Node } from './node';
import { Edge, IQualifier } from './edge';
import * as yaml from 'js-yaml';
import { writeFileSync, readFileSync } from 'fs';

interface INodeStore {
  [key: string]: Node
}

interface IEdgeStore {
  [key: string]: Edge
}

interface IGraph {
  nodes: INodeStore;
  edges: IEdgeStore;
}

interface IUniverse {
  graph: IGraph;
  history: IGraph;
}

export class Universe {
  graph: IGraph;
  history: IGraph;

  constructor() {
    this.graph = { nodes: {}, edges: {} };
    this.history = { nodes: {}, edges: {} };
  }

  addNode() {
    const node = new Node();
    this.graph.nodes[node.id] = node;
    return node.id;
  }

  removeNode(id: string) {
    const node = this.graph.nodes[id]
    this.history.nodes[id] = node
    delete this.graph.nodes[id]
    return id
  }

  addEdge(subject: string, predicate: string, object: string, qualifiers: IQualifier[] = []) {
    const edge = new Edge(subject, predicate, object, qualifiers);
    this.graph.edges[edge.id] = edge;
    return edge.id;
  }

  removeEdge(id: string) {
    const edge = this.graph.edges[id]
    this.history.edges[id] = edge
    delete this.graph.edges[id]
    return id
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
