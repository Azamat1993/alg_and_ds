var BinarySearchTreeNode = require('./binary_search_tree_node');
var extend = require('./utils').extend;

function AvlTree() {
  this.root = this;
  this.__super__.apply(this, arguments);
}

extend(AvlTree, BinarySearchTreeNode);

AvlTree.prototype.insert = function(val) {
  this.root = this.root;
  this.__super__.prototype.insert.call(this, val);

  if (this.balanceFactor > 1) {
    this.rightRotation(this);
  }
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
