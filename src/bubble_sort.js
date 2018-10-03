function BubbleSort(cb) {
  this.cb = cb || {
    compareCallback: function(a, b) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1;
    }
  };
}

BubbleSort.prototype.sort = function(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i; j ++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = BubbleSort;