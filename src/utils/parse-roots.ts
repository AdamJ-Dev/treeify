import { ITreeNode } from "../classes/tree-node";
import { Item } from "../types";

export const getRoots = <T extends Item>(nodes: ITreeNode<T>[]) => {
  return nodes.filter((node) => !node.item.parentId);
};

export const getNonRoots = <T extends Item>(nodes: ITreeNode<T>[]) => {
  return nodes.filter((node) => node.item.parentId);
};

