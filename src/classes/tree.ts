import { Item } from "../types";
import { ITreeNode } from "./tree-node";

export interface ITree<T extends Item> {
  readonly roots: ITreeNode<T>[];
  DFSPreOrder(): T[];
}

class Tree<T extends Item> implements ITree<T> {
  constructor(readonly roots: ITreeNode<T>[]) {
    this.roots = roots;
  }

  DFSPreOrder() {
    const visited: T[] = [];
    const traverse = (start: ITreeNode<T>) => {
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
