var sort_tester = require('./sort_tester');
var QuickSort = require('../src/quick_sort');

var equalArr = sort_tester.equalArr;
var notSortedArr = sort_tester.notSortedArr;
var reverseArr = sort_tester.reverseArr;
var sortedArr = sort_tester.sortedArr;
var SortTester = sort_tester.SortTester;

fdescribe('QuickSort', function() {
  it('should sort array', function() {
    SortTester.testSort(QuickSort);
  });
});
