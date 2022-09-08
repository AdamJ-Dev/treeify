import { ITree } from "../classes/tree";

const orderByTree = (Tree: ITree) => {
  return Tree.DFSPreOrder();
};

export default orderByTree;
