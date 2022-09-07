const { TreeNode } = require("../classes/Tree")

const mapToTreeNodes = (list) => {
  return list.map(item => new TreeNode(item));
};

module.exports = mapToTreeNodes;