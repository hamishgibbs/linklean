export const Greeter = (name: string) => `Hello ${name}`;

export const Node = (title: string, type: string) => {
  return title
}


/*
Node {
	uuid: 1
	created: ts
	removed: ts
}

Edge {
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

*/
