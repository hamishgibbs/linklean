import { v4 as uuidv4 } from 'uuid';

export const Greeter = (name: string) => `Hello ${name}`;

interface IQualifier {
  qualifier: string;
  target: string;
}

export class Node {
  id: string;
  created: Date;
  removed: null|Date;

  constructor() {
    this.id = uuidv4();
    this.created = new Date();
    this.removed = null;
  }
}

export class Edge {
  subject: string;
  predicate: string;
  object: string;
  qualifiers: IQualifier[];
  id: string;
  created: Date;
  removed: null|Date;

  constructor(
    subject: string,
    predicate: string,
    object: string,
    qualifiers: IQualifier[] = []) {
    this.id = uuidv4();
    this.created = new Date();
    this.removed = null;
    this.subject = subject,
    this.predicate = predicate,
    this.object = object
    this.qualifiers = qualifiers
  }
}

interface IGraph {
  nodes: Node[];
  edges: Edge[]
}

export class Universe {
  graph: IGraph;
  history: IGraph;

  constructor(){
    this.graph = {nodes: [], edges: []};
    this.history = {nodes: [], edges: []};
  }

  addNode(){
    // create a node
    var node = new Node();

    // add node to graph
    this.graph.nodes.push(node)

    // return node ID
    return node.id
  }
}

/*

Graph {
  nodes: []
  edges: []
}

History: {
  nodes: []
  edges: []
}

Need to have some methods for creating nodes / edges and adding them to graph, then migrating an entity from graph to history
This API should (MUST) separate CRUD actions from implementation details for clients
*/
