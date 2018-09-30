var gcd = require('./euclidian');

function lcd(a, b) {
  if (b === 0){
    return 0;
  }
  return Math.abs(a * b) / gcd(a, b);
}

module.exports = lcd;
