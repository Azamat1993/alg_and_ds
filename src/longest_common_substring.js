function longestCommonSubstring(s1, s2) {
  var arr = new Array(s1.length);

  for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(s2.length);
  }

  var max = {
    value: 0,
    index: {
      i: 0,
      j: 0
    }
  }

  for(var i = 0; i < s1.length; i++) {
    for(var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (i > 0 && j > 0) {
          arr[i][j] = (arr[i-1][j-1] || 0) + 1;

          if (arr[i][j] > max.value) {
            max = {
              value: arr[i][j],
              index: {
                i: i,
                j: j
              }
            }
          }
        } else {
          arr[i][j] = 1;
        }
      } else {
        arr[i][j] = 0;
      }
    }
  }

  var res = '';

  if (max.value > 0) {
    while (max.index.i) {
      res = s1[max.index.i--] + res;
    }
  }

  return res;
}

module.exports = longestCommonSubstring
