function binarySearch(sortedArr, ch, comparator) {
  comparator = comparator || simpleComparator;

  var startIndex = 0;
  var endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    var middle = startIndex + Math.floor(((endIndex - startIndex) / 2));
    var compare = comparator(sortedArr[middle], ch);

    if (compare === 0) {
      return middle;
    } else if (compare < 0) {
      startIndex = middle + 1;
    } else {
      endIndex = middle - 1;
    }
  }

  return -1;
}

function simpleComparator(a, b) {
  return a === b ? 0 : (a < b ? -1 : 1);
}

module.exports = binarySearch;
