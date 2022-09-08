import { Item } from "../types";

export interface ITreeNode {
  readonly item: Item;
  children: ITreeNode[];
}

class TreeNode implements ITreeNode {
  constructor(readonly item: Item, public children: ITreeNode[] = []) {
    this.item = item;
    this.children = children;
  }
}

export default TreeNode;