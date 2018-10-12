function knuthMorrisPratt(s, f) {
  if (s.length <= 1) {
    return 0;
  }
  var arr = constructMatches(f), j = 0, res = -1;
  for (var i = 0; i < s.length; i++ ) {
    if (s[i] !== f[j]) {
      j = arr[j >= 1 ? (j - 1) : 0];
    }

    if (s[i] === f[j]) {
      j++;
    }

    if (f.length === j) {
      res = i - j + 1;
    }
  }
  return res;
}

function constructMatches(str) {
  var res = new Array(str.length), i = 1, j = 0;
  res[0] = 0;
  while (i < str.length) {
    if (str[i] !== str[j]) {
      j = j >= 1 ? res[j-1] : 0;
    }

    if (str[i] === str[j]) {
      res[i++] = ++j;
    } else {
      res[i++] = j;
    }
  }

  return res;
}

module.exports = knuthMorrisPratt;
