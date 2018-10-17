function maximumSubarray(arr) {
  var temp = new Array(arr.length);

  if (!arr.length) {
    return arr;
  }

  var max = {
    index: 0,
    value: arr[0]
  };
  var redIndex = 0;

  for(var i = 0; i < arr.length; i++) {
    if (i === 0) {
      temp[i] = arr[i];
    } else {
      var maximum = Math.max(temp[i - 1] + arr[i], arr[i]);

      if (arr[i] > temp[i - 1] + arr[i]) {
        redIndex = i;
      }

      if (maximum > max.value) {
        max = {
          index: i,
          value: maximum
        };
      }

      temp[i] = maximum;
    }
  }

  var res = [];
  for(var i = max.index; i >= 0; i--) {
    if (redIndex > i && redIndex <= max.index) {
      break;
    }
    res.unshift(arr[i]);
  }

  console.log(redIndex, max);

  return res;
}

module.exports = maximumSubarray;
