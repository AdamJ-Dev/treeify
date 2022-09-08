import { Item } from "../types";
import { ITreeNode } from "./tree-node";

export interface ITree {
  readonly roots: ITreeNode[];
  DFSPreOrder(): Item[];
}

class Tree implements ITree {
  constructor(readonly roots: ITreeNode[]) {
    this.roots = roots;
  }

  DFSPreOrder() {
    const visited: Item[] = [];
    const traverse = (start: ITreeNode) => {
      visited.push(start.item);
      for (const child of start.children) {
        traverse(child);
      }
    };
    for (const root of this.roots) {
      traverse(root);
    }
    return visited;
  }
}

export default Tree;
