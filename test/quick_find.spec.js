var QuickFind = require('../src/quick_find');

describe('QuickFind', function(){
  it('should set initial array', function() {
    var quick = new QuickFind(10);

    expect(quick.ids).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
  it('should make union and find operations', function() {
    var quick = new QuickFind(10);

    quick.union(4, 3);
    expect(quick.connected(4,3)).toBe(true);
    expect(quick.connected(4,1)).toBe(false);
    quick.union(3, 8);

    expect(quick.connected(4,8)).toBe(true);
    quick.union(6, 5);
    quick.union(9, 4);

    expect(quick.connected(5,6)).toBe(true);
    expect(quick.connected(0,1)).toBe(false);
    expect(quick.connected(1,6)).toBe(false);
    expect(quick.connected(8,4)).toBe(true);

    quick.union(2,1);

    expect(quick.connected(8, 9)).toBe(true);
    expect(quick.connected(5, 0)).toBe(false);

    quick.union(5,0);
    quick.union(7,2);
    quick.union(6,1);

    expect(quick.connected(0,7)).toBe(true);
  });
});
