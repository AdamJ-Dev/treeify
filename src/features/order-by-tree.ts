import { ITree } from "../classes/tree";
import { Item } from "../types";

const orderByTree = <T extends Item>(Tree: ITree<T>) => {
  return Tree.DFSPreOrder();
};

export default orderByTree;
