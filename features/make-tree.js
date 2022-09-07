const mapToTreeNodes = require("../utils/map-to-tree-nodes");
const getIdMap = require("../utils/get-id-map");
const { getRoots, getNonRoots } = require("../utils/parse-roots");
const { Tree } = require("../classes/Tree");

const makeTree = (list) => {
  const nodes = mapToTreeNodes(list);
  const idsToNodes = getIdMap(nodes);

  const roots = getRoots(nodes);
  const nonRoots = getNonRoots(nodes);

  for (const nonRoot of nonRoots) {
    const parentId = nonRoot.item.parentId;
    const parent = idsToNodes[parentId];
    parent.children.push(nonRoot);
  }

  return new Tree(roots);
};

module.exports = makeTree;
