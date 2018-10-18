var maximumSubarray = require('../src/maximum_subarray');

describe('dpMaximumSubarray', function() {
  it('should find maximum subarray using dynamic programming algorithm', function() {
    expect(maximumSubarray([])).toEqual([]);
    expect(maximumSubarray([0, 0])).toEqual([0]);
    expect(maximumSubarray([0, 0, 1])).toEqual([0, 0, 1]);
    expect(maximumSubarray([-6, 2, -4, 1, 3, -1, 5, -1])).toEqual([1,3,-1, 5]);
    expect(maximumSubarray([0, 0, 1, 2])).toEqual([0, 0, 1, 2]);
    expect(maximumSubarray([0, 0, -1, 2])).toEqual([2]);
    expect(maximumSubarray([-1, -2, -3, -4, -5])).toEqual([-1]);
    expect(maximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual([1, 2, 3, 2, 3, 4, 5]);
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    expect(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    expect(maximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual([7, 6, -1, 4, 11]);
  });
});
