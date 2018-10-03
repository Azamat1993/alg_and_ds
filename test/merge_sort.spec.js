var sort_tester = require('./sort_tester');
var MergeSort = require('../src/merge_sort');

var equalArr = sort_tester.equalArr;
var notSortedArr = sort_tester.notSortedArr;
var reverseArr = sort_tester.reverseArr;
var sortedArr = sort_tester.sortedArr;
var SortTester = sort_tester.SortTester;

describe('MergeSort', function() {
  it('should sort array', function() {
    SortTester.testSort(MergeSort);
  });
});
