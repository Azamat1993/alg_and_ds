function BinarySearchTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTreeNode.prototype.insert = function(val) {
  var returnTree = this;
  if (!this.value) {
    this.value = val;
  } else {
    if (val < this.value) {
      if (!this.left) {
        returnTree = this.left = new BinarySearchTreeNode(val);
      } else {
        this.left.insert(val);
      }
    } else if (this.value < val) {
      if (!this.right) {
        returnTree = this.right = new BinarySearchTreeNode(val);
      } else {
        this.right.insert(val);
      }
    } else {
      return returnTree;
    }
  }

  return returnTree;
}

BinarySearchTreeNode.prototype.find = function(val) {
  function findInternal(node) {
    if (!node) {
      return null;
    }

    if (node.value === val) {
      return node;
    }

    if (node.value > val) {
      return findInternal(node.left);
    } else {
      return findInternal(node.right);
    }
  }

  return findInternal(this);
}

BinarySearchTreeNode.prototype.remove = function(val) {
  
}

BinarySearchTreeNode.prototype.findMin = function() {
  function findMinInternal(node) {
    if (node.left) {
      return findMinInternal(node.left);
    }
    return node;
  }

  return findMinInternal(this);
}

BinarySearchTreeNode.prototype.traverseInOrder = function() {
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

BinarySearchTreeNode.prototype.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  if (val <= this.value) {
    return this.left ? this.left.contains(val) : false;
  } else {
    return this.right ? this.right.contains(val) : false;
  }
}

BinarySearchTreeNode.prototype.toString = function() {
  return this.traverseInOrder().join(',');
}

module.exports = BinarySearchTreeNode;
