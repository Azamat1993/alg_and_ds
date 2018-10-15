var mathCompiler = require('../src/math_compiler');

describe('mathCompiler', function() {
  it('should able to perform operations', function() {
    expect(mathCompiler('(1 + 1)')).toBe(2);
    // expect(mathCompiler('(1 + ((2 + 3) * (4  * 5)))')).toBe(101);
  });
});
