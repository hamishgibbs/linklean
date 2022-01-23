import { v4 as uuidv4 } from 'uuid';

export const Greeter = (name: string) => `Hello ${name}`;

export class Node {
  uuid: string;
  created: Date;
  removed: null|Date;

  constructor() {
    this.uuid = uuidv4();
    this.created = new Date();
    this.removed = null;
  }
}

export class Edge {
  subject: string;
  predicate: string;
  object: string;
  uuid: string;
  created: Date;
  removed: null|Date;

  constructor(
    subject: string,
    predicate: string,
    object: string) {
    this.uuid = uuidv4();
    this.created = new Date();
    this.removed = null;
    this.subject = subject,
    this.predicate = predicate,
    this.object = object
    // Need to add qualifiers
  }
}

/*
Node {
	uuid: 1
	created: ts
	removed: ts
}

Edge {
	uuid: 2
	subject: uuid
	predicate: string
	object: uuid
	qualifiers: [string: uuid, ...]
	created: ts
	removed: ts
}

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
