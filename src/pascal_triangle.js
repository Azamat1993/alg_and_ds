function pascalTriangle(n) {
  if (n === 0) {
    return [1]
  } else if (n === 1) {
    return [1, 1];
  } else {
    var res = new Array(n + 1);
    res[0] = res[n] = 1;
    var arr = pascalTriangle(n - 1);

    for (var i = 1; i < n; i++ ){
      res[i] = arr[i - 1] + arr[i];
    }

    return res;
  }
}

module.exports = pascalTriangle
