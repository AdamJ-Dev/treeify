import { Item } from "../types";

export interface ITreeNode<T extends Item> {
  readonly item: T;
  children: ITreeNode<T>[];
}

class TreeNode<T extends Item> implements ITreeNode<T> {
  constructor(readonly item: T, public children: ITreeNode<T>[] = []) {
    this.item = item;
    this.children = children;
  }
}

export default TreeNode;