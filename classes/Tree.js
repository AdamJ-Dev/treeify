class Tree {
  constructor(roots = []) {
    this.roots = roots;
  }

  DFSPreOrder() {
    const visited = [];
    const traverse = (start) => {
      visited.push(start.item);
      for (const child of start.children) {
        traverse(child)
      }
    }
    for (const root of this.roots) {
      traverse(root);
    }
    return visited;
  }
}

class TreeNode {
  constructor(item, children = []) {
    this.item = item;
    this.children = children;
  }
}

module.exports = {
  Tree,
  TreeNode,
};
