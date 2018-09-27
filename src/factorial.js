function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  var res = 1;
  while (n > 1) {
    res *= n--;
  }
  return res;
}

module.exports = factorial;
