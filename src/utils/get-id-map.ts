import { ITreeNode } from "../classes/tree-node";
import { Item } from "../types";

const getIdMap = <T extends Item>(nodes: ITreeNode<T>[]) => {
  const map: Record<string, ITreeNode<T>> = {};
  for (const node of nodes) {
    map[node.item.id] = node;
  }
  return map;
};

export default getIdMap;
