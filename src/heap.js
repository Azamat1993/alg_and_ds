function Heap() {

}

function MinHeap() {
  this.items = [];
  this.size = 0;
}

MinHeap.prototype.add = function(val) {
  this.items[this.items.length] = val;
  this.heapifyUp();
}

MinHeap.prototype.heapifyUp = function() {
  var index = this.items.length - 1;
  while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
    this.swap(this.getParentIndex(index), index);
    index = this.getParentIndex(index);
  }
}

MinHeap.prototype.swap = function(leftIndex, rightIndex) {
  var temp = this.items[leftIndex];
  this.items[leftIndex] = this.items[rightIndex];
  this.items[rightIndex] = temp;
}

MinHeap.prototype.poll = function() {
  if (this.items.length === 0) {
    return null;
  }
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.splice(-1, 1);
  this.heapifyDown();
  return item;
}

MinHeap.prototype.heapifyDown = function() {
  var index = 0;
  while (this.hasLeftChild(index)) {
    var smallestChildIndex = this.getLeftChildIndex(index);

    if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
      smallestChildIndex = this.getRightChildIndex(index);
    }

    if (this.items[index] < this.items[smallestChildIndex]) {
      break;
    } else {
      this.swap(index, smallestChildIndex);
    }
    index = smallestChildIndex;
  }
}

MinHeap.prototype.hasLeftChild = function(index) {
  return this.getLeftChildIndex(index) < this.items.length;
}

MinHeap.prototype.getLeftChild = function(index) {
  return this.hasLeftChild(index) && this.items[this.getLeftChildIndex(index)];
}

MinHeap.prototype.getLeftChildIndex = function(index) {
  return index * 2 + 1;
}

MinHeap.prototype.hasRightChild = function(index) {
  return this.getRightChildIndex(index) < this.items.length;
}

MinHeap.prototype.getRightChild = function(index) {
  return this.hasRightChild(index) && this.items[this.getRightChildIndex(index)];
}

MinHeap.prototype.getRightChildIndex = function(index) {
  return index * 2 + 2;
}

MinHeap.prototype.getParent = function(index) {
  return this.hasParent(index) && this.items[this.getParentIndex(index)];
}

MinHeap.prototype.hasParent = function(index) {
  return this.getParentIndex(index) >= 0;
}


MinHeap.prototype.getParentIndex = function(childIndex) {
  return Math.floor((childIndex - 1) / 2);
}

MinHeap.prototype.find = function(val) {
  var res = [];
  for(var i = 0;i < this.items.length; i++ ){
    if (val === this.items[i]) {
      res.push(i);
    }
  }
  return res;
}

MinHeap.prototype.peek = function() {
  return this.items[0] || null;
}

MinHeap.prototype.isEmpty = function() {
  return this.items.length === 0;
}

MinHeap.prototype.toString = function() {
  return this.items.join(',');
}

module.exports = {
  Heap: Heap,
  MinHeap: MinHeap
}
