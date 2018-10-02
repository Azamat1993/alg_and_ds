function binarySearch(sortedArr, ch, comparator) {
  comparator = comparator || simpleComparator;

  var start = 0, end = sortedArr.length - 1;

  while (start <= end) {
    var middle = Math.floor((start + end) /2);
    var compare = comparator(sortedArr[middle], ch);
    if (compare === 0) {
      return middle;
    } else  if (compare > 0) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

function simpleComparator(a, b) {
  return a === b ? 0 : (a < b ? -1 : 1);
}

module.exports = binarySearch;
