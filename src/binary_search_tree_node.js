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
        returnTree = this.left = new this.constructor(val);
      } else {
        this.left.insert(val);
      }
    } else if (this.value < val) {
      if (!this.right) {
        returnTree = this.right = new this.constructor(val);
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

BinarySearchTreeNode.prototype.remove = function(val, withConsole) {
  var self = this;
  function removeInner(node, value, withConsoleLog) {
    val = value || val;
    if (node === null || node === undefined) {
      return node;
    } else if (node.value > val) {
      node.left = removeInner(node.left);
    } else if (node.value < val) {
      node.right = removeInner(node.right);
    } else {
      if (node.right === null && node.left === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        var temp = node.right.findMin();
        node.value = temp.value;
        node.right = removeInner(node.right, node.value, true);
      }
    }

    return node;
  }

  var res = removeInner(this);

  if ((res === null) || (res.left === null && res.right === null)) {
    this.value = res ? res.value : null;
    this.left = null;
    this.right = null;
  }

  return res ? true : false;
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
