import { ITree } from "../classes/tree";
import { Item } from "../types";
import makeTree from "./make-tree";

const orderByTree = <T extends Item>(list: T[]) => {
  return makeTree(list).DFSPreOrder();
};

export default orderByTree;
