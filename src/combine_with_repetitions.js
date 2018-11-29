function combineWithRepetitions(arr, l) {
  if (l === 1) {
    return arr.map(function(a) {
      return [a];
    });
  }

  var res = [];

  arr.forEach(function(current, currIndex) {
    var s = arr.slice(currIndex);
    console.log(s);
    var smaller = combineWithRepetitions(s, l - 1);

    console.log(smaller);

    smaller.forEach(function(small) {
      res.push([current].concat(small));
    })
  })

  return res;
}

module.exports = combineWithRepetitions;
