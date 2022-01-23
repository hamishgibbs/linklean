import { v4 as uuidv4 } from 'uuid';

interface IQualifier {
  qualifier: string;
  target: string;
}

export class Edge {
  subject: string;
  predicate: string;
  object: string;
  qualifiers: IQualifier[];
  id: string;
  created: Date;
  removed: null | Date;

  constructor(subject: string, predicate: string, object: string, qualifiers: IQualifier[] = []) {
    this.id = uuidv4();
    this.created = new Date();
    this.removed = null;
    (this.subject = subject), (this.predicate = predicate), (this.object = object);
    this.qualifiers = qualifiers;
  }
}
