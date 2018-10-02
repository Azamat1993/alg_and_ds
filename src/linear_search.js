function linearSearch(arr, ch, comparator) {
  comparator = comparator || simpleComparator;
  var res = [];
  for (var i=0;i<arr.length;i++) {
    if (comparator(arr[i], ch) === 0) {
      res.push(i);
    }
  }
  return res;
}

function simpleComparator(a, b) {
  return a === b ? 0 : (a < b ? -1 : 1);
}

module.exports = linearSearch;
