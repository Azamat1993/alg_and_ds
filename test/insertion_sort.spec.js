var InsertionSort = require('../src/insertion_sort');
var sort_tester = require('./sort_tester');

var equalArr = sort_tester.equalArr;
var notSortedArr = sort_tester.notSortedArr;
var reverseArr = sort_tester.reverseArr;
var sortedArr = sort_tester.sortedArr;
var SortTester = sort_tester.SortTester;

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 101;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 210;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('InsertionSort', function() {
  it('should sort array', function() {
    SortTester.testSort(InsertionSort);
  });
});
