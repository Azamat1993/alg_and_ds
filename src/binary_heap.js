function BinaryHeap(size) {
  this.arr = new Array(size + 1);
  this.arr[0] = null;
  this.N = 0;
}

module.exports = BinaryHeap;
