var integerPartition = require('../src/integer_partition');

describe('integerPartition', function() {
  it('should partition the number', function() {
    expect(integerPartition(1)).toBe(1);
    expect(integerPartition(2)).toBe(2);
    expect(integerPartition(3)).toBe(3);
    expect(integerPartition(4)).toBe(5);
    expect(integerPartition(5)).toBe(7);
    expect(integerPartition(6)).toBe(11);
    expect(integerPartition(7)).toBe(15);
    expect(integerPartition(8)).toBe(22);
  });
});
