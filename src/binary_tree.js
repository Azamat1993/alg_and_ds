function BinaryTreeNode(value) {
  this.value = value || null;
  this.left = null;
  this.right = null;
  this.parent = null;
}

BinaryTreeNode.prototype.setLeft = function(node) {
  this.left = node;

  if (node) {
    node.parent = this;
  }

  return this;
}

BinaryTreeNode.prototype.setRight = function(node) {
  this.right = node;

  if (node) {
    node.parent = this;
  }

  return this;
}

Object.defineProperty(BinaryTreeNode.prototype, 'height', {
  get: function() {
    return Math.max(this.leftHeight, this.rightHeight);
  }
});

Object.defineProperty(BinaryTreeNode.prototype, 'balanceFactor', {
  get: function() {
    return this.leftHeight - this.rightHeight;
  }
})

Object.defineProperty(BinaryTreeNode.prototype, 'leftHeight', {
  get: function() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }
});

Object.defineProperty(BinaryTreeNode.prototype, 'rightHeight', {
  get: function() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }
});

Object.defineProperty(BinaryTreeNode.prototype, 'uncle', {
  get: function() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.parent.parent.left === this.parent) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
  }
});

BinaryTreeNode.prototype.setValue = function(value) {
  this.value = value;
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

BinaryTreeNode.prototype.replaceChild = function(node1, node2) {
  if (!node1 || !node2) {
    return false;
  }

  if (this.right === node1) {
    this.right = node2;
    return true;
  } else if (this.left === node1) {
    this.left = node2;
    return true;
  }

  return false;
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
