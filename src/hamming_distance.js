function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) {
    throw new Error('Strings should be same length');
  }
  var res = 0;

  for (var i = 0; i < s1.length;i++){
    if (s1[i] !== s2[i]) {
      res++;
    }
  }

  return res;
}

module.exports = hammingDistance;
