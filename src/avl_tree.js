var BinarySearchTreeNode = require('./binary_search_tree_node');
var extend = require('./utils').extend;

function AvlTree() {
  this.root = this;
  this.__super__.apply(this, arguments);
}

extend(AvlTree, BinarySearchTreeNode);

AvlTree.prototype.insert = function(val) {
  this.__super__.prototype.insert.call(this.root, val);
  if (this.balanceFactor > 1) {
    this.rightRightRotate(this);
  } else if (this.balanceFactor < -1) {
    this.leftLeftRotate(this);
  }
}

AvlTree.prototype.leftLeftRotate = function(node) {
  var newRoot = node.right;
  node.right = newRoot.left;
  newRoot.left = node;

  if (node.parent) {
    node.parent.right = newRoot;
  }

  this.root = newRoot;
}

AvlTree.prototype.rightRightRotate = function(root) {
    var newRoot = root.left;
    root.left = newRoot.right;
    newRoot.right = root;

    if (root.parent) {
      root.parent.left = newRoot;
    }

    this.root = newRoot;
}

AvlTree.prototype.traverseInOrder = function() {
  var res = [];
  function traverseNodes(node) {
    if (node.left !== null) {
      traverseNodes(node.left)
    }
    res.push(node.value);

    if (node.right !== null) {
      traverseNodes(node.right);
    }
  }
  traverseNodes(this.root);

  return res;
}

Object.defineProperty(AvlTree.prototype, 'height', {
  get: function() {
    return Math.max(this.leftHeight, this.rightHeight);
  }
});

Object.defineProperty(AvlTree.prototype, 'balanceFactor', {
  get: function() {
    return this.leftHeight - this.rightHeight;
  }
});

Object.defineProperty(AvlTree.prototype, 'leftHeight', {
  get: function() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }
});

Object.defineProperty(AvlTree.prototype, 'rightHeight', {
  get: function() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }
})

module.exports = AvlTree;
