function zAlgorithm(str, s) {
  var occurances = [];

  for (var i = 0; i< str.length; i++) {
    if (str[i] === s.charAt(0)) {
      var occured = true;
      for (var j = 0; j < s.length; j++) {
        if (str.length < j) {
          occured = false;
          break;
        } else {
          if (str[i + j] !== s[j]) {
            occured = false;
            break;
          }
        }
      }

      if (occured) {
        occurances.push(i);
        i += j;
      } else {
        continue;
      }
    } else {

    }
  }

  return occurances;
}

module.exports = zAlgorithm;
