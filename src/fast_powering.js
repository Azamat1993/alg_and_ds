function fastPowering(x, n) {
  if(n === 0) {
    return 1;
  } else if(n === 1) {
    return x;
  } else {
    var intermediateResult = fastPowering(x, Math.floor(n/2));
    intermediateResult *= intermediateResult;
    if (n % 2 !== 0) {
      intermediateResult *=x;
    }
    return intermediateResult;
  }
}

module.exports = fastPowering;
