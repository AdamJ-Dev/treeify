const getIdMap = (nodes) => {
  const map = {};
  for (const node of nodes) {
    map[node.item.id] = node;
  }
  return map;
};

module.exports = getIdMap;
