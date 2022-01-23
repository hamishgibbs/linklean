import { v4 as uuidv4 } from 'uuid';

export class Node {
  id: string;
  created: Date;
  removed: null | Date;

  constructor() {
    this.id = uuidv4();
    this.created = new Date();
    this.removed = null;
  }
}
