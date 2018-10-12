function levenshteinDistance(s1, s2) {
  var arr = new Array(s1.length + 1), i, j;

  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(s2.length + 1);
  }

  for(i = 0; i< s1.length + 1;i++) {
    for (j = 0; j < s2.length + 1; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = 0;
      } else if (i === 0) {
        arr[i][j] = arr[i][j - 1] + 1;
      } else if (j === 0) {
        arr[i][j] = arr[i - 1][j] + 1;
      } else {
        if (s1[i-1] === s2[j-1]) {
          arr[i][j] = arr[i-1][j-1];
        } else {
          arr[i][j] = Math.min(
            arr[i-1][j],
            arr[i][j-1],
            arr[i-1][j-1]
          ) + 1;
        }
      }
    }
  }

  return arr[i-1][j-1];
}

module.exports = levenshteinDistance;
