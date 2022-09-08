import { ITreeNode } from "../classes/tree-node";

export const getRoots = (nodes: ITreeNode[]) => {
  return nodes.filter((node) => !node.item.parentId);
};

export const getNonRoots = (nodes: ITreeNode[]) => {
  return nodes.filter((node) => node.item.parentId);
};

