function clearBit(num, pos) {
  return (num & ~(1 << pos));
}

module.exports = clearBit;
