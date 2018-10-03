function SelectionSort() {

}

SelectionSort.prototype.sort = function(arr) {
  for(var i = 0; i < arr.length - 1; i++) {
    var minIndex = i;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

module.exports = SelectionSort;
