import { Item } from "../types";
import TreeNode from "../classes/tree-node"

const mapToTreeNodes = (list: Item[]) => {
  return list.map(item => new TreeNode(item));
};

export default mapToTreeNodes;