var factorial = require('../src/factorial');

describe('factorial', function(){
  it('of 0 is 1', function(){
    expect(factorial(0)).toBe(1);
  });

  it('of 1 is 1', function(){
    expect(factorial(1)).toBe(1);
  });

  it('of 2 is 2', function(){
    expect(factorial(2)).toBe(2);
  });

  it('of 3 is 6', function(){
    expect(factorial(3)).toBe(6);
  });

  it('of 4 is 24', function(){
    expect(factorial(3)).toBe(6);
  });

  it('of 5 is 120', function(){
    expect(factorial(3)).toBe(6);
  });

  it('of 10 is 3628800', function(){
    expect(factorial(10)).toBe(3628800);
  });
});
