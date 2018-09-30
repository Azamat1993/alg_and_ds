function BinaryTreeNode(value) {
  this.value = value || null;
  this.left = null;
  this.right = null;
  this.parent = null;
}

BinaryTreeNode.prototype.setLeft = function(node) {
  this.left = node;
  node.parent = this;
  return this;
}

BinaryTreeNode.prototype.setRight = function(node) {
  this.right = node;
  node.parent = this;
  return this;
}

BinaryTreeNode.prototype.traverseInOrder = function() {
  var res = [];
  function traverseNodes(node) {
    if (node.left !== null) {
      traverseNodes(node.left);
    }
    res.push(node.value);
    if (node.right !== null) {
      traverseNodes(node.right);
    }
  }

  traverseNodes(this);

  return res;
}

BinaryTreeNode.prototype.removeChild = function(node) {
  if (this.left === node && this.left !== null) {
    this.left = null;
    return true;
  } else if (this.right === node && this.right !== null) {
    this.right = null;
    return true;
  }
  return false;
}

BinaryTreeNode.prototype.toString = function() {
  return this.traverseInOrder().join(',');
}

module.exports = {
  BinaryTreeNode: BinaryTreeNode
}
