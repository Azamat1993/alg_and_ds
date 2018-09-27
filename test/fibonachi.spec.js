var fibonachi = require('../src/fibonachi');

describe('fibonachi', function(){
  it('of 0 is 0', function() {
    expect(fibonachi(0)).toBe(0);
  });

  it('of 1 is 1', function() {
    expect(fibonachi(1)).toBe(1);
  });

  it('of 2 is 1', function() {
    expect(fibonachi(1)).toBe(1);
  });

  it('of 3 is 2', function() {
    expect(fibonachi(3)).toBe(2);
  });

  it('of 4 is 3', function() {
    expect(fibonachi(4)).toBe(3);
  });

  it('of 5 is 5', function() {
    expect(fibonachi(5)).toBe(5);
  });

  it('of 6 is 8', function() {
    expect(fibonachi(6)).toBe(8);
  });

  it('of 7 is 13', function() {
    expect(fibonachi(7)).toBe(13);
  });

  it('of 8 is 21', function() {
    expect(fibonachi(8)).toBe(21);
  });

  it('of 50 is 12586269025', function() {
    expect(fibonachi(50)).toBe(12586269025);
  });
});
