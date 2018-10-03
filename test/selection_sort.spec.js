var sort_tester = require('./sort_tester');
var SelectionSort = require('../src/selection_sort');

var equalArr = sort_tester.equalArr;
var notSortedArr = sort_tester.notSortedArr;
var reverseArr = sort_tester.reverseArr;
var sortedArr = sort_tester.sortedArr;
var SortTester = sort_tester.SortTester;


describe('SelectionSort', function() {
  it('should sort array', function() {
    SortTester.testSort(SelectionSort);
  });
});
