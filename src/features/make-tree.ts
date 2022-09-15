import Tree from "../classes/tree";
import { Item } from "../types";
import getIdMap from "../utils/get-id-map";
import mapToTreeNodes from "../utils/map-to-tree-nodes";
import { getNonRoots, getRoots } from "../utils/parse-roots";

const makeTree = <T extends Item> (list: T[]) => {
  const nodes = mapToTreeNodes(list);
  const idsToNodes = getIdMap(nodes);

  const roots = getRoots(nodes);
  const nonRoots = getNonRoots(nodes);

  for (const nonRoot of nonRoots) {
    const parentId = nonRoot.item.parentId!;
    const parent = idsToNodes[parentId];
    parent.children.push(nonRoot);
  }

  return new Tree(roots);
};

export default makeTree;
