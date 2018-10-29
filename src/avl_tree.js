var BinarySearchTreeNode = require('./binary_search_tree_node');
var extend = require('./utils').extend;

function AvlTree() {
  this.root = this;
  this.__super__.apply(this, arguments);
}

extend(AvlTree, BinarySearchTreeNode);

AvlTree.prototype.insert = function(val) {
  var node = this.__super__.prototype.insert.call(this.root, val);
  if (this.balanceFactor > 1) {
    // left
    if (!this.left.left) {
      // left - right
      this.leftRightRotate(this);
    } else if (!this.left.right) {
      // left left
      this.rightRightRotate(this);
    } else {
      if (this.left.left.balanceFactor > this.left.right.balanceFactor) {
        // left left
        this.rightRightRotate(this);
      } else {
        // left - right
      }
    }
  } else if (this.balanceFactor < -1) {
    // right

    if (!this.right.left) {
      this.leftLeftRotate(this);
    } else if (!this.right.right) {
      this.rightLeftRotate(this);
    } else {
      if (this.right.left.balanceFactor < this.right.right.balanceFactor) {

      } else {
        this.leftLeftRotate(this);
      }
    }
  }
}

AvlTree.prototype.leftRightRotate = function(node) {
  var rightNode = node.left.right;
  var leftNode = node.left;
  node.left = rightNode;
  rightNode.left = leftNode;
  leftNode.right = null;

  this.rightRightRotate(node);
}

AvlTree.prototype.rightLeftRotate = function(node) {
  var leftNode = node.right.left;
  var rightNode = node.right;

  node.right = leftNode;
  leftNode.right = rightNode;
  rightNode.left  = null;

  this.leftLeftRotate(node);
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
