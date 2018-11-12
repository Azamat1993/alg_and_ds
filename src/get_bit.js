function getBit(num, offset) {
  return ((1 << offset) & num) !== 0 ? 1 : 0;
}

module.exports = getBit;
