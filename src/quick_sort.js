function QuickSort() {

}

QuickSort.prototype.sort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  this._sort(arr, 0, arr.length - 1);

  return arr;
}

QuickSort.prototype._sort = function(arr, lo, hi) {
  if (hi <= lo) {
    return;
  }
  var j = this.partition(arr, lo, hi);
  this._sort(arr, lo, j - 1);
  this._sort(arr, j + 1, hi);
}

QuickSort.prototype.partition = function(arr, lo , hi) {
  var i = lo, j = hi + 1;

  while (true) {
    while (arr[++i] < arr[lo]) {
      if (i === hi) {
        break;
      }
    }

    while (arr[lo] < arr[--j]) {
      if (j === lo) {
        break;
      }
    }

    if (i >= j) {
      break;
    }

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  var temp = arr[lo];
  arr[lo] = arr[j];
  arr[j] = temp;

  return j;
}

module.exports = QuickSort;
