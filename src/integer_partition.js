function integerPartition(n) {
  var arr = new Array(n + 1);

  for(var i = 1; i <= n; i++ ) {
    for(var j = i - 1; j < arr.length; j++ ) {
      if (i === 1) {
        arr[j] = 1;
      } else {
        if (j >= i) {
          arr[j] += arr[j - i];
        }
      }
    }
  }

  return arr[n];
}

module.exports = integerPartition;
