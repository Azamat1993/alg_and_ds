var cartesianProduct = require('../src/cartesian_product');

describe('cartesianProduct', function() {
  it('should return null if there is not enough info for calculation', function() {
    const product1 = cartesianProduct([1], null);
    const product2 = cartesianProduct([], null);

    expect(product1).toBeNull();
    expect(product2).toBeNull();
  });

  it('should calculate the product of two sets', function() {
    const product1 = cartesianProduct([1], [1]);
    const product2 = cartesianProduct([1, 2], [3, 5]);

    expect(product1).toEqual([[1, 1]]);
    expect(product2).toEqual([[1, 3], [1, 5], [2, 3], [2, 5]]);
  });

  it('should calculate the product of two sets', function() {
    const product = cartesianProduct(['x', 'y', 'z'], [1, 2, 3]);

    expect(product).toEqual([['x', 1], ['x', 2], ['x', 3], ['y', 1], ['y', 2], ['y', 3], ['z', 1], ['z', 2], ['z', 3]]);
  });
});
