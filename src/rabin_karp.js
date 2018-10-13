var prime = 3;

function rabinKarp(str, substr) {
  var subHash = generateHash(substr), index = -1;
  for (var i = 0; i < str.length - substr.length + 1; i++) {
    var hash = generateHash(str.substr(i, substr.length));
    if (hash === subHash) {
      var equal = true;
      for (var j = 0; j < substr.length; j++) {
        if (substr[j] !== str[i + j]) {
          equal = false;
          break;
        }
      }

      if (equal) {
        index = i;
      }
    } 
    if (index !== -1) {
      break;
    }
  }
  return index;
}

function generateHash(s) {
    var res = 0;
    for(var i = 0;i<s.length;i++){
      res+=Math.pow(prime, i) + s.charCodeAt(i);
    }

    return res;
}

module.exports = rabinKarp;
