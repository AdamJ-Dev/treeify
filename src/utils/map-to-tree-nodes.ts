import { Item } from "../types";
import TreeNode from "../classes/tree-node"

const mapToTreeNodes = <T extends Item>(list: T[]) => {
  return list.map(item => new TreeNode(item));
};

export default mapToTreeNodes;