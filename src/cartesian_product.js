function cartesianProduct(arr1, arr2) {
  if (!arr1 || !arr2 || !arr1.length || !arr2.length) {
    return null;
  }

  var res = [];

  for (var i =0; i < arr1.length; i++ ){
    for (var j=0; j< arr2.length;j++) {
      res.push([arr1[i], arr2[j]]);
    }
  }

  return res;
}

module.exports = cartesianProduct;
