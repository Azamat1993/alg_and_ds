function sieveOfEratosthenes(n) {
  var arr = new Array(n + 1);

  if (n <= 1) {
    return [];
  } else {
    arr[0] = arr[1] = false;
    var to =  Math.floor(Math.sqrt(n));
    for(var i = 2; i <= to; i++) {
      if (arr[i] === undefined) {
        arr[i] = true;
      }

      for (var j = i + i; j < arr.length; j = j + i) {
        arr[j] = false;
      }
    }

    var res = [];

    for(var i = 2; i < arr.length ; i++) {
      if (arr[i] === undefined || arr[i] === true) {
        res.push(i);
      }
    }

    return res;
  }
}

module.exports = sieveOfEratosthenes;
