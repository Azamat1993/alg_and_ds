function euclideanAlgorithm(left, right) {
  if (left < 0) {
    left = Math.abs(left);
  }
  if (right < 0) {
    right = Math.abs(right);
  }
  if (left === 0) {
    return right;
  }
  if (right === 0) {
    return left;
  }
  if (left === right) {
    return left;
  }
  if (left > right) {
    var remainder = left % right;
    if (remainder === 0) {
      return right;
    }
    return euclideanAlgorithm(right, remainder);
  } else {
    var remainder = right % left;
    if (remainder === 0) {
      return left;
    }
    return euclideanAlgorithm(left, remainder);
  }
}

module.exports = euclideanAlgorithm;
