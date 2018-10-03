function MergeSort() {

}

MergeSort.prototype.sort = function(arr) {
  return this.innerSort(arr.slice());
}

MergeSort.prototype.innerSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = this.innerSort(arr.splice(0, Math.floor(arr.length / 2)));
  var right = this.innerSort(arr);
  return this.merge(left, right);
}

MergeSort.prototype.merge = function(left, right) {
  var res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }
  return res;
}

module.exports = MergeSort;
