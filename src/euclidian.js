function euclideanAlgorithm(left, right) {
  left = Math.abs(left);
  right = Math.abs(right);

  return (right === 0) ? left : euclideanAlgorithm(right, left % right);
}

module.exports = euclideanAlgorithm;
