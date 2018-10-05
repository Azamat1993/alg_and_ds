function BinarySearchTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTreeNode.prototype.insert = function(val) {
  if (!this.left && !this.right) {
    this.value = val;
  } else {
    if (val <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTreeNode(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTreeNode(val);
      } else {
        this.right.insert(val);
      }
    }
  }

  return this;
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

}

module.exports = BinarySearchTreeNode;
