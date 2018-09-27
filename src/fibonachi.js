function fibonachi(n) {
  if (n <= 1) {
    return n;
  }
  var seq = new Array(n+1);
  seq[0] = 0;
  seq[1] = 1;
  for (var i=2;i<=n;i++) {
    seq[i] = seq[i-1] + seq[i-2];
  }
  return seq[n];
}

module.exports = fibonachi;
