function InsertionSort() {

}

InsertionSort.prototype.sort = function(arr) {
  var key, i;

  for (var i = 1; i < arr.length;i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}
module.exports = InsertionSort;
