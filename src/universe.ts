import { Node } from './node';
import { Edge, IQualifier } from './edge';
import * as yaml from 'js-yaml';
// import {fs} from 'fs';

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

  toYAML() {
    return yaml.dump({graph: this.graph, history: this.history})
  }

  fromYAML(document: string) {
    const data = yaml.load(document) as IUniverse
    this.graph = data.graph
    this.history = data.history
  }

  /*
  load(fn: string) {
    doc = yaml.load(fs.readFileSync(fn, 'utf8'))
    // I / O needs to be separated here - this should deal with putting graph inplace and test that it is json
  }
  */

  // universe.toYML() - this can be unit tested

  // save() to save entire graph (to a file for now) - this can't be unit tested

  // load () to construct entire graph (from a file for now) - this can't be unit tested

}
