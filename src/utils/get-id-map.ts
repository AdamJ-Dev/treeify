import { ITreeNode } from "../classes/tree-node";

const getIdMap = (nodes: ITreeNode[]) => {
  const map: Record<string, ITreeNode> = {};
  for (const node of nodes) {
    map[node.item.id] = node;
  }
  return map;
};

export default getIdMap;
