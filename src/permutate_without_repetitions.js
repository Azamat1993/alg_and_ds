function permutateWithoutRepetitions(array) {
  function perm(arr, length) {
    if (length === 1) {
      return arr.map(function(a) {
        return [a];
      });
    }

    var res = [];

    arr.forEach(function(current) {
      var smaller = perm(arr, length - 1);

      smaller.forEach(function(small) {
        res.push([current].concat(small));
      })
    })

    return res;
  }

  return perm(array, array.length);
}

module.exports = permutateWithoutRepetitions;
