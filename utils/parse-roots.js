const getRoots = (nodes) => {
  return nodes.filter((node) => !node.item.parentId);
};

const getNonRoots = (nodes) => {
  return nodes.filter((node) => node.item.parentId);
};

module.exports = {
  getRoots,
  getNonRoots,
};
